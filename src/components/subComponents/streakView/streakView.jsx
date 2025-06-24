
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";
import {useEffect, useState} from "react";

function StreakView({isOpen, onClose, streak}) {
    const [streakText, setStreakText] = useState("");

    // Selecting text based on streak value
    useEffect(() => {
        const streakTexts = [
            "Piece of cake..",
            "Not Bad..",
            "Pretty good..",
            "Amazing",
            "Wow you're wonderful!"
        ];

        // Ensure streak index is within bounds
        const index = Math.min(Math.max(0, streak), streakTexts.length - 1);
        setStreakText(streakTexts[index]);

    }, [streak]);

    if (!isOpen) return null;

    return (
        <DefaultModal title="Your Streak" onClose={onClose}>
            <div className="streakContainer">
                <img className="streakFlame" src="/icons/streak_icon.png" alt="streakFlame"/>
                <span className="streakValue">{streak}</span>
                <p className="streakText">{streakText}</p>
            </div>
        </DefaultModal>
    )
}

export default StreakView;
