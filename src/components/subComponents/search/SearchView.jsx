
import { useState } from 'react';
import './SearchView.css';
import DefaultModal from "../model/DefaultModal.jsx";

function SearchView({ isOpen, onClose, setSearchedEntry }) {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchedEntry(inputValue);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <DefaultModal title="Search Entries" onClose={onClose}>
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
        </DefaultModal>
    );
}

export default SearchView;
