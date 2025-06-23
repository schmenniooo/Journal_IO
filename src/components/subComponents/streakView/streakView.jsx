
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";

function StreakView({isOpen, onClose, streak}) {

    if (!isOpen) return null;

    // TODO: Appropriate Text for streak value

    return (
        <DefaultModal title="Streak View" onClose={onClose}>
            <div className="streakContainer">
                <span className="streakValue">{streak}</span>
                <p className="streakText"></p>
            </div>
        </DefaultModal>
    )
}

export default StreakView;
