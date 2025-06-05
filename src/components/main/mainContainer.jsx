
import React from 'react';
import './mainContainer.css'

function MainContainer({ entries = [], onDelete }) {

    return (
        <main className='mainContainer'>
            <ul className="journalList">
                {entries.map(entry => (
                    <li key={entry.id} className="journalListItem">
                        <div className="journalEntry">
                            <button className="journalActionButton" id="delete" onClick={(e) => {
                                e.stopPropagation();
                                onDelete(entry);
                            }}>
                                <img className="journalActionIcon" id="delete"src="/close_icon.png" alt="close"/>
                            </button>
                            <h3 className="journalHeading">{entry.title}</h3>
                            <p className="journalText">{entry.content}</p>
                            <button className="journalActionButton" id="edit" onClick={(e) => {
                                e.stopPropagation();
                                // TODO: editEntry
                            }}>
                                <img className="journalActionIcon" id="edit" src="/edit_icon.png" alt="edit"/>
                            </button>
                            <div className="journalDate">{entry.date}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default MainContainer;
