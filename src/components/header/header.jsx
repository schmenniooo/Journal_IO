
import './header.css'
import OptionsView from '../subComponents/optionsView/optionsView.jsx'
import StreakView from '../subComponents/streakView/streakView.jsx'
import SearchView from "../subComponents/searchView/searchView.jsx";
import {useState} from "react";

function Header({ setSearchedEntry, streak}) {

    const [searchViewOpen, setSearchViewOpen] = useState(false);
    const [streakViewOpen, setStreakViewOpen] = useState(false);
    const [optionsViewOpen, setOptionsViewOpen] = useState(false);

    const handleSearchView = () => {
        setSearchViewOpen(!searchViewOpen);
    }
    const handleStreakView = () => {
        setStreakViewOpen(!streakViewOpen);
    }
    const handleOptionsView = () => {
        setOptionsViewOpen(!optionsViewOpen);
    }

    return (

        <header className="header">
            <h1 className="mainHeading">Journal</h1>
            <section className="buttonContainer">
                <button className="optionsButton" onClick={handleSearchView}><img src="/icons/search_icon.png" className="icon" alt="search"/></button>
                <button className="optionsButton" onClick={handleStreakView}><img src="/icons/streak_icon.png" className="icon" alt="streak"/></button>
                <button className="optionsButton" onClick={handleOptionsView}><img src="/icons/options.png" className="icon" alt="options"/></button>
            </section>
            <SearchView isOpen={searchViewOpen} onClose={handleSearchView} setSearchedEntry={setSearchedEntry} />
            <StreakView isOpen={streakViewOpen} onClose={handleStreakView} streak={streak} />
            <OptionsView isOpen={optionsViewOpen} onClose={handleOptionsView}/>
        </header>
    )
}

export default Header
