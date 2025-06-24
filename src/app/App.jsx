
import './App.css'
import React, {useEffect, useState} from "react";
import {useBeforeUnload} from "react-router-dom";
import DataStorageHandler from "../datasource/persistency/dataStorageHandler.js";
import Header from "../components/header/header.jsx";
import DefaultMain from "../components/defaultMain/default.jsx";
import MainContainer from "../components/main/mainContainer.jsx";
import Footer from "../components/footer/footer.jsx";

function App() {

    let [streak, setStreak] = useState(() => {
        const value = DataStorageHandler.readStreak();
        return value ?? 0;
    });
    const [entries, setEntries] = useState(() => DataStorageHandler.readEntries());
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
        DataStorageHandler.writeEntries(entries);
        DataStorageHandler.writeStreak(streak);
    }, [entries, streak]);

    return (
        <div className="app-container">
            <Header setSearchedEntry={setSearchedEntry} streak={streak} entries={entries}/>
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
