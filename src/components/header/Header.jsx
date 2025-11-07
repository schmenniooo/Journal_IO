
import {useState} from "react";
import './Header.css'
import OptionsView from '../subComponents/options/OptionsView.jsx'
import StreakView from '../subComponents/streak/StreakView.jsx'
import SearchView from "../subComponents/search/SearchView.jsx";
import BookmarksView from "../subComponents/bookmarks/BookmarksView.jsx";

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
                <button className="optionsButton" onClick={handleSearchView}><img src="/img/search_icon.png" className="icon" alt="search"/></button>
                <button className="optionsButton" onClick={handleStreakView}><img src="/img/streak_icon.png" className="icon" alt="streak"/></button>
                <button className="optionsButton" onClick={handleBookmarkedView}><img src="/img/bookmark_icon.png" className="icon" alt="bookmarked"/></button>
                <button className="optionsButton" onClick={handleOptionsView}><img src="/img/options_icon.png" className="icon" alt="options"/></button>
            </section>

            <SearchView isOpen={searchViewOpen} onClose={handleSearchView} setSearchedEntry={setSearchedEntry} />
            <StreakView isOpen={streakViewOpen} onClose={handleStreakView} streak={streak} />
            <BookmarksView isOpen={bookmarkedViewOpen} onCLose={handleBookmarkedView} entries={entries} setSearchedEntry={setSearchedEntry}/>
            <OptionsView isOpen={optionsViewOpen} onClose={handleOptionsView}/>
        </header>
    )
}

export default Header
