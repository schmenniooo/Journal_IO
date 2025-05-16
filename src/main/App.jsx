
import React, { useState } from "react";
import Header from "../components/Header/header.jsx";
import DefaultMain from "../components/DefaultMain/default.jsx";
import MainContainer from "../components/Main/mainContainer.jsx";
import Footer from "../components/Footer/footer.jsx";

function App() {

    const [entries, setEntries] = useState([]);

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

    return (
        <div className="app-container">
            <Header />
            {entries.length > 0 ? (
                <MainContainer entries={entries} />
            ) : (
                <DefaultMain />
            )}
            <Footer onSaveEntry={handleSaveEntry} />
        </div>
    )
}

export default App