import './StreakView.css'
import DefaultModal from "../model/DefaultModal.jsx";
import {useEffect, useState} from "react";

function StreakView({isOpen, onClose, streak}) {

    const [streakText, setStreakText] = useState("");

    // Set the streak message when streak changes
    useEffect(() => {
        setStreakText(getStreakText(streak));
    }, [streak]);

    const getStreakText = (streak) => {
        const streakTexts = [
            "Piece of cake..",
            "Not Bad..",
            "Pretty good..",
            "Amazing",
            "Wow you're wonderful!"
        ];

        const index = Math.min(Math.max(0, streak), streakTexts.length - 1);
        return streakTexts[index];
    };

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
