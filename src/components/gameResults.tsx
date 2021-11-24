import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import HappyAudio from '../assets/sound/happy.mp3';

interface GameResultsProps {}

const GameResults: FunctionComponent<GameResultsProps> = () => {

    const { setShowGameResults, setGameStarted } = useContext(GameContext);

    const happyAudio = new Audio(HappyAudio);

    useEffect(() => {
        happyAudio.play();
        return () => {
            happyAudio.pause();
        }
    }, []);
    
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