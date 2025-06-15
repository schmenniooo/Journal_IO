
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";

function StreakView({isOpen, onClose, streak}) {

    if (!isOpen) return null;

    return (
        <DefaultModal title="Streak View" onClose={onClose}>
            <div className="streakContainer">
                {/*TODO*/}
                Coming Soon ...
            </div>
        </DefaultModal>
    )
}

export default StreakView;