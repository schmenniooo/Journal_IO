
import React from 'react';
import './mainContainer.css'

function MainContainer({ entries = [], onDelete }) {

    return (
        <main className='mainContainer'>
            <ul className="journalList">
                {entries.map(entry => (
                    <li key={entry.id} className="journalListItem">
                        <div className="journalEntry">
                            <h3 className="journalHeading">{entry.title}</h3>
                            <p className="journalText">{entry.content}</p>
                            <button className="deleteButton" onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(entry.id);
                                }}
                            >
                                <img className="deleteIcon" src="/close_icon.png" alt="close"/>
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
