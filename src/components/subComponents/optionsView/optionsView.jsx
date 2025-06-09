
import './optionsView.css'

function OptionsView({ isOpen, onClose}) {

    const showDocumentation = () => {
        window.open("https://github.com/schmenniooo/Journal_IO")
    }
    const sortByDate = () => {
        // TODO
    }
    const showStreak = () => {
        // TODO
    }

    const onCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="modalOverlay">
            <div className="optionsModal">
                <header className="modalHeader">
                    <h2 className="modalTitle">Options</h2>
                    <button className="closeButton" onClick={onCloseClick}>×</button>
                </header>
                <ul className="optionsList">
                    <li className="optionsListItem"><button className="optionsListItemAction" onClick={showDocumentation}>Documentation</button></li>
                    <li><button className="optionsListItemAction" onClick={sortByDate}>Sort by Date</button></li>
                    <li><button className="optionsListItemAction" onClick={showStreak}>View Streak</button></li>
                    <li><button className="optionsListItemAction" onClick={onCloseClick}>Close</button></li>
                </ul>
            </div>
        </div>
    )
}

export default OptionsView;
