
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";
import {useEffect, useState} from "react";

function StreakView({isOpen, onClose, streak}) {

    const [streakText, setStreakText] = useState("");

    // TODO: Appropriate Text for streak value
    useEffect(() => {

        // TODO

    }, [streak]);

    if (!isOpen) return null;

    return (
        <DefaultModal title="Streak View" onClose={onClose}>
            <div className="streakContainer">
                <span className="streakValue">{streak}</span>
                <p className="streakText">{streakText}</p>
            </div>
        </DefaultModal>
    )
}

export default StreakView;
