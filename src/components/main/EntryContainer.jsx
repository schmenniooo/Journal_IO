
import React, { useState } from 'react';
import ModalEntryView from '../subComponents/entry/EntryView.jsx';
import './EntryContainer.css';

function EntryContainer({ entries = [], onDelete, onSave, searchedEntry }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEntry, setCurrentEntry] = useState(null);

    const handleBookmark = (entry) => {
        const updatedEntry = { ...entry, bookmarked: !entry.bookmarked };
        if (onSave) onSave(updatedEntry);
        setCurrentEntry(updatedEntry);
    };

    const openEditModal = (entry) => {
        setCurrentEntry(entry);
        setIsModalOpen(true);
    };

    const handleSave = (updatedEntry) => {
        if (onSave) onSave(updatedEntry);
        closeModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentEntry(null);
    };

    return (
        <main className="mainContainer">
            <ul className="journalList">
                {entries.map((entry) => (
                    <li key={entry.id} className="journalListItem">
                        <section className="journalEntry" id={searchedEntry === entry.title ? 'highlightedEntry' : undefined} onClick={() => handleBookmark(entry)}>
                            <img className="journalActionIcon" src="/icons/bookmark_icon.png" alt="bookmark" style={{ visibility: entry.bookmarked ? 'visible' : 'hidden' }}/>
                            <button className="journalActionButton" id="delete" onClick={(e) => {
                                e.stopPropagation();
                                onDelete(entry);
                            }}>
                                <img className="journalActionIcon" id="delete" src="/icons/close_icon.png" alt="close"/>
                            </button>
                            <h3 className="journalHeading">{entry.title}</h3>
                            <p className="journalText">{entry.content}</p>
                            <button className="journalActionButton" id="edit" onClick={(e) => {
                                e.stopPropagation();
                                openEditModal(entry);
                            }}>
                                <img className="journalActionIcon" id="edit" src="/icons/edit_icon.png" alt="edit"/>
                            </button>
                            <div className="journalDate">{entry.date}</div>
                        </section>
                    </li>
                ))}
            </ul>
            <ModalEntryView isOpen={isModalOpen} onClose={closeModal} entryToEdit={currentEntry} onSave={handleSave}/>
        </main>
    );
}

export default EntryContainer;
