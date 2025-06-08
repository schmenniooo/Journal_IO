
import './optionsView.css'

function OptionsView({ isOpen, onClose }) {

    // TODO: Sort by, Streak etc.

    const onCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    if (!isOpen) return null;

    return (

        <div className="modalOverlay">
            <div className="optionsModal">
                <ul className="optionsList">
                    <li className="optionsListItem">
                        <a className="optionsListItemAction" href="https://github.com/schmenniooo/Journal_IO">Documentation</a>
                    </li>
                </ul>
            </div>
            <button className="closeButton" onClick={onCloseClick}>×</button>
        </div>
    )
}

export default OptionsView;
