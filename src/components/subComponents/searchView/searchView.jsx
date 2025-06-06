
import './searchView.css'

function SearchView() {

    const onSubmit = () => {

        // TODO
    }

    return (

        <div className="searchContainer">
            <form className="searchForm" onSubmit={onSubmit}>
                <input className="searchField" placeholder="Type in title" type="text"/>
            </form>
        </div>
    )
}

export default SearchView;