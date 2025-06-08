
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
                <div className="modalHeader">
                    <h2 className="modalTitle">Options</h2>
                    <button className="closeButton" onClick={onCloseClick}>×</button>
                </div>
                <ul className="optionsList">
                    <li className="optionsListItem">
                        <button className="optionsListItemAction" onClick={showDocumentation}>Documentation</button>
                        <button className="optionsListItemAction" onClick={sortByDate}>Sort by Date</button>
                        <button className="optionsListItemAction" onClick={showStreak}>View Streak</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OptionsView;
