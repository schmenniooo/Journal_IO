
import './App.css'
import React, {useEffect, useState} from "react";
import DataStorageHandler from "../../persistency/dataStorageHandler.js";
import Header from "../header/Header.jsx";
import IntroContainer from "../intro/IntroContainer.jsx";
import EntryContainer from "../main/EntryContainer.jsx";
import Footer from "../footer/Footer.jsx";

function App() {

    let [streak, setStreak] = useState(() => {
        const value = DataStorageHandler.readStreak();
        return value ?? 0;
    });
    const [entries, setEntries] = useState(() => DataStorageHandler.readEntries());
    const [searchedEntry, setSearchedEntry] = useState(null);

    // Handling streak before unload without react-router dependency
    useEffect(() => {
        const onBeforeUnload = () => {
            handleStreak();
        };
        window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [entries]);

    // Saving entries by every render:
    useEffect(() => {
        DataStorageHandler.writeEntries(entries);
        DataStorageHandler.writeStreak(streak);
    }, [entries, streak]);

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
        const today = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        let increment = 0;
        entries.forEach((entry) => {
            // If the entry date equals today => User created a page today => streak incrementing
            if (entry.date === today) {
                increment += 1;
            }
        });
        if (increment > 0) {
            setStreak((prev) => prev + increment);
        }
    };

    return (
        <div className="app-container">
            <Header setSearchedEntry={setSearchedEntry} streak={streak} entries={entries.filter(entry => entry.bookmarked)}/>
            {entries.length === 0 ? (
                <IntroContainer/>
            ) : (
                <EntryContainer entries={entries} onDelete={handleDeleteEntry} onSave={handleSaveEntry} searchedEntry={searchedEntry} />
            )}
            <Footer onSaveEntry={handleSaveEntry} />
        </div>
    )
}

export default App
