
import './OptionsView.css'
import DefaultModal from "../model/DefaultModal.jsx";

function OptionsView({ isOpen, onClose}) {

    const showDocumentation = () => {
        window.open("https://github.com/schmenniooo/Journal_IO")
    }

    const about = () => {
        window.open("https://ennio-schmidt.netlify.app/")
    }

    const onCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    if (!isOpen) return null;

    return (
        <DefaultModal title="Options" onClose={onClose}>
            <ul className="optionsList">
                <li className="optionsListItem">
                    <button className="optionsListItemAction" onClick={showDocumentation}>Documentation</button>
                </li>
                <li className="optionsListItem">
                    <button className="optionsListItemAction" onClick={about}>About</button>
                </li>
                <li className="optionsListItem">
                    <button className="optionsListItemAction" onClick={onCloseClick}>Close</button>
                </li>
            </ul>
        </DefaultModal>
    )
}

export default OptionsView;
