import { FunctionComponent } from "react";
import "../styles/scoreboard.css";

interface ScoreboardProps {
    wordsAttempts: number;
    wordsCompleted: number;
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({ wordsAttempts, wordsCompleted }) => {
    return (
        <div className="scoreboard">
            <p>attempts: {wordsAttempts}</p>
            <p>completed: {wordsCompleted}/30</p>
        </div>
    );
}

export default Scoreboard;