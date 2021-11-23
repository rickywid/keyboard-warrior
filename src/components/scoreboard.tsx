import { FunctionComponent } from "react";

interface ScoreboardProps {
    wordsAttempts: number;
    wordsCompleted: number;
}

const Scoreboard: FunctionComponent<ScoreboardProps> = ({ wordsAttempts, wordsCompleted }) => {
    return (
        <div className="scoreboard">
            <p>attempts: {wordsAttempts}</p>
            <p>completed: {wordsCompleted}</p>
        </div>
    );
}

export default Scoreboard;