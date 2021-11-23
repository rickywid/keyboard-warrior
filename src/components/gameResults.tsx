import { FunctionComponent } from "react";

interface GameResultsProps {
    start: () => void;
    updateGameResults: (val: boolean) => void;
}

const GameResults: FunctionComponent<GameResultsProps> = ({start, updateGameResults}) => {
    return (
        <div>
            <button onClick={() => {
                start();
                updateGameResults(true)
            }}>Yes</button>
            <button onClick={() => updateGameResults(false)}>No</button>
        </div>
    );
}

export default GameResults;