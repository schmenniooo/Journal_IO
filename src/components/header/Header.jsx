
import {useState} from "react";
import './Header.css'
import OptionsView from '../subComponents/optionsView/optionsView.jsx'
import StreakView from '../subComponents/streakView/streakView.jsx'
import SearchView from "../subComponents/searchView/searchView.jsx";
import BookmarkView from "../subComponents/bookmarkView/bookmarkView.jsx";

function Header({ setSearchedEntry, streak, entries }) {

    const [searchViewOpen, setSearchViewOpen] = useState(false);
    const [streakViewOpen, setStreakViewOpen] = useState(false);
    const [bookmarkedViewOpen, setBookmarkedViewOpen] = useState(false);
    const [optionsViewOpen, setOptionsViewOpen] = useState(false);

    const handleSearchView = () => {
        setSearchViewOpen(!searchViewOpen);
    }

    const handleStreakView = () => {
        setStreakViewOpen(!streakViewOpen);
    }
    const handleBookmarkedView = () => {
        setBookmarkedViewOpen(!bookmarkedViewOpen);
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
                <button className="optionsButton" onClick={handleBookmarkedView}><img src="/icons/bookmark_icon.png" className="icon" alt="bookmarked"/></button>
                <button className="optionsButton" onClick={handleOptionsView}><img src="/icons/options.png" className="icon" alt="options"/></button>
            </section>

            <SearchView isOpen={searchViewOpen} onClose={handleSearchView} setSearchedEntry={setSearchedEntry} />
            <StreakView isOpen={streakViewOpen} onClose={handleStreakView} streak={streak} />
            <BookmarkView isOpen={bookmarkedViewOpen} onCLose={handleBookmarkedView} entries={entries} setSearchedEntry={setSearchedEntry}/>
            <OptionsView isOpen={optionsViewOpen} onClose={handleOptionsView}/>
        </header>
    )
}

export default Header
