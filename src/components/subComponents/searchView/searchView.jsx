
import { useState } from 'react';
import './searchView.css';

function SearchView({ isOpen, onClose, setSearchedEntry }) {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchedEntry(inputValue);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="searchModal">
                <header className="modalHeader">
                    <h2 className="modalTitle">Search Entries</h2>
                    <button className="closeButton" onClick={onClose}>×</button>
                </header>
                <div className="searchContainer">
                    <form className="searchForm" onSubmit={onSubmit}>
                        <input
                            className="searchField"
                            placeholder="Type in title"
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}/>
                        <button type="submit" className="searchButton">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchView;
