import { FunctionComponent, useContext } from "react";
import { GameContext } from "../context/game";

interface GameResultsProps {}

const GameResults: FunctionComponent<GameResultsProps> = () => {

    const { setShowGameResults, setGameStarted } = useContext(GameContext);

    return (
        <div>
            <button onClick={() => {
                setGameStarted(true);
                setShowGameResults(true)
            }}>Yes</button>
            <button onClick={() => setShowGameResults(false)}>No</button>
        </div>
    );
}

export default GameResults;