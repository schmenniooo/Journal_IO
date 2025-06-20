
import './App.css'
import React, {useEffect, useState} from "react";
import EntryStorageHandler from "../datasource/persistency/entryStorageHandler.js";
import Header from "../components/header/header.jsx";
import DefaultMain from "../components/defaultMain/default.jsx";
import MainContainer from "../components/main/mainContainer.jsx";
import Footer from "../components/footer/footer.jsx";

function App() {

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

    // Saving entries before unloading page:
    useEffect(() => {
        EntryStorageHandler.writeEntries(entries);
    }, [entries]);

    return (
        <div className="app-container">
            <Header setSearchedEntry={setSearchedEntry} />
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
