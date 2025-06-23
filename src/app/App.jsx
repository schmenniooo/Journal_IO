
import './App.css'
import React, {useEffect, useState} from "react";
import EntryStorageHandler from "../datasource/persistency/entryStorageHandler.js";
import Header from "../components/header/header.jsx";
import DefaultMain from "../components/defaultMain/default.jsx";
import MainContainer from "../components/main/mainContainer.jsx";
import Footer from "../components/footer/footer.jsx";
import {useBeforeUnload} from "react-router-dom";

function App() {

    let [streak, setStreak] = useState(EntryStorageHandler.readStreak);
    const [entries, setEntries] = useState(() => EntryStorageHandler.readEntries());
    const [searchedEntry, setSearchedEntry] = useState(null);

    const handleSaveEntry = (entry) => {
        // Check if entry already exists (for editing)
        const existingEntryIndex = entries.findIndex(e => e.id === entry.id);

        if (existingEntryIndex >= 0) {
            // Update existing entry
            const updatedEntries = [...entries];
            updatedEntries[existingEntryIndex] = entry;
            setEntries(updatedEntries);
        } else {
            // Add new entry
            setEntries([...entries, entry]);
        }
    };

    const handleDeleteEntry = (entryToDelete) => {
        const updatedEntries = entries.filter(entry => entry !== entryToDelete);
        setEntries(updatedEntries);
    };

    const handleStreak = () => {

        entries.map((entry) => {
            const today = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // If the entry date equals today => User created a page today => streak incrementing
            if (entry.date.equals(today)) {
                setStreak(streak++);
                return true;
            }
        });
    };

    // Handling streak before unload:
    useBeforeUnload(() => {
        handleStreak();
    })

    // Saving entries by every render:
    useEffect(() => {
        EntryStorageHandler.writeEntries(entries);
        EntryStorageHandler.writeStreak(streak);
    }, [entries, streak]);

    return (
        <div className="app-container">
            <Header setSearchedEntry={setSearchedEntry} streak={streak}/>
            {entries.length === 0 ? (
                <DefaultMain/>
            ) : (
                <MainContainer entries={entries} onDelete={handleDeleteEntry} onSave={handleSaveEntry} searchedEntry={searchedEntry} />
            )}
            <Footer onSaveEntry={handleSaveEntry} />
        </div>
    )
}

export default App
