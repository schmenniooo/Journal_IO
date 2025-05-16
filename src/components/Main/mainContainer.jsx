
import React from 'react';
import './main.css'

function MainContainer({ entries = [] }) {

    return (
        <main className='mainContainer'>
            <ul className="journalList">
                {entries.map(entry => (
                    <li key={entry.id} className="journalListItem">
                        <div className="journalEntry">
                            <h3 className="journalHeading">{entry.title}</h3>
                            <p className="journalText">{entry.content}</p>
                            <div className="journalDate">{entry.date}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default MainContainer;