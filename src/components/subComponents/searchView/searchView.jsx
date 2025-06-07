
import './searchView.css'

function SearchView({ isOpen, onClose }) {

    const onSubmit = () => {
        // TODO
        onClose();
    }

    if (!isOpen) return null;

    return (

        <div className="searchContainer">
            <form className="searchForm" onSubmit={onSubmit}>
                <input className="searchField" placeholder="Type in title" type="text"/>
            </form>
        </div>
    )
}

export default SearchView;
