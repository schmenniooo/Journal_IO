
import './streakView.css'
import DefaultModal from "../model/defaultModal.jsx";
import {useEffect, useState} from "react";

function StreakView({isOpen, onClose, streak}) {

    const [streakText, setStreakText] = useState("");

    // Selecting text on streak value:
    useEffect(() => {

        const streakTexts = [
            "Piece of cake..",
            "Not Bad..",
            "Pretty good..",
            "Amazing",
            "Wow you're wonder!"
        ];

        let streakText = "";

        for (let i = 0; i < streakTexts.length; i++) {
            streakText = streakTexts[streak];
        }

        setStreakText(streakText);

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
