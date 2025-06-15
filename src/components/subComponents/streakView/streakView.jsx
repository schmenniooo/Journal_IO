
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";

function StreakView({isOpen, onClose}) {

    if (!isOpen) return null;

    return (
        <DefaultModal title="Streak View" onClose={onClose}>
            <div>

            </div>
        </DefaultModal>
    )
}

export default StreakView;