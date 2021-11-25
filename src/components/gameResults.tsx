import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import HappyAudio from '../assets/sound/happy.mp3';

interface GameResultsProps { }

const GameResults: FunctionComponent<GameResultsProps> = () => {

    const { setShowGameResults, setGameStarted, soundOn } = useContext(GameContext);

    useEffect(() => {
        const happyAudio = new Audio(HappyAudio);

        if (soundOn) {
            happyAudio.play();
        }

        return () => {
            happyAudio.pause();
        }
    }, [soundOn]);

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