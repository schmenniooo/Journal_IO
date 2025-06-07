
import './header.css'
// TODO: import ModalOptionsView from '../subComponents/optionsView/optionsView.jsx'
import SearchView from "../subComponents/searchView/searchView.jsx";
import {useState} from "react";

function Header(){

    const [searchViewOpen, setSearchViewOpen] = useState(false);

    // Switch between open and closed
    const handleSearchView = () => {
        setSearchViewOpen(!searchViewOpen);
    }

    return (

        <header className="header">
            <h1 className="mainHeading">Journal</h1>
            <section className="buttonContainer">
                <button className="optionsButton" onClick={handleSearchView}><img src="/icons/search_icon.png" className="icon" alt="search"/></button>
                <button className="optionsButton"><img src="/icons/options.png" className="icon" alt="options"/></button>
            </section>
            <SearchView isOpen={searchViewOpen} onClose={handleSearchView}/>
        </header>
    )
}

export default Header
