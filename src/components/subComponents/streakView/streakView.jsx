
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";
import {useEffect, useState} from "react";

function StreakView({isOpen, onClose, streak}) {

    const [streakText, setStreakText] = useState("");

    // TODO: Appropriate Text for streak value
    useEffect(() => {

        setStreakText("Wow, you're wonder!");

    }, [streak]);

    if (!isOpen) return null;

    return (
        <DefaultModal title="Streak View" onClose={onClose}>
            <div className="streakContainer">
                <img className="streakFlame" src="/icons/streak_icon.png" alt="streakFlame"/>
                <span className="streakValue">{streak}</span>
                <p className="streakText">{streakText}</p>
            </div>
        </DefaultModal>
    )
}

export default StreakView;
