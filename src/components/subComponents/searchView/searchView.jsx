
import './searchView.css'

function SearchView({ isOpen, onClose }) {

    const onSubmit = (e) => {
        e.preventDefault();
        // TODO
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="searchModal">
                <div className="modalHeader">
                    <h2 className="modalTitle">Search Entries</h2>
                    <button className="closeButton" onClick={onClose}>×</button>
                </div>
                <div className="searchContainer">
                    <form className="searchForm" onSubmit={onSubmit}>
                        <input className="searchField" placeholder="Type in title" type="text"/>
                        <button type="submit" className="searchButton">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchView;
