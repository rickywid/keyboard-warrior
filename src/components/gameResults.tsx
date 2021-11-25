import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import HappyAudio from '../assets/sound/happy.mp3';
import SwordsPNG from '../assets/images/swords.png';

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
        <div className="welcome">
            <img src={SwordsPNG} alt="words" />
            <h1>KEYBOARD WARRIOR</h1>
            <p>Play Again?</p>
            <div className="btn-group">
                <button onClick={() => {
                    setGameStarted(true);
                    setShowGameResults(true)
                }}>Yes</button>
                <button onClick={() => setShowGameResults(false)}>No</button>
            </div>
        </div>
    );
}

export default GameResults;