import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import HappyAudio from '../assets/sound/happy.mp3';
import SwordsPNG from '../assets/images/swords.png';
import '../styles/game-results.css';

interface GameResultsProps { }

const GameResults: FunctionComponent<GameResultsProps> = () => {

    const {
        setShowGameResults,
        setGameStarted,
        soundOn,
        gameScore,
        wordsCompleted,
        wordsAttempts,
        setDisplayNotification,
        setIsWordsMatch,
        setWordsCompleted,
        setWordsAttempts,
        setGameScore
    } = useContext(GameContext);

    useEffect(() => {
        setDisplayNotification({
            error: false,
            enterBtn: false
        });
        setIsWordsMatch(false);
        
        const happyAudio = new Audio(HappyAudio);

        if (soundOn) {
            happyAudio.play();
        }

        return () => {
            happyAudio.pause();
        }
    }, [
        soundOn,
        setDisplayNotification,
        setIsWordsMatch,
        setWordsCompleted,
        setWordsAttempts,
        setGameScore
    ]);

    return (
        <div className="game-results welcome">
            <img src={SwordsPNG} alt="words" />
            <h1>GAME OVER</h1>
            <div className="summary">
                <p># of mistakes: {wordsAttempts}</p>
                <p>Words Completed: {wordsCompleted}</p>
                <p className="score">Score: {gameScore}</p>
            </div>
            <h2>Play Again?</h2>
            <div className="btn-group">
                <button onClick={() => {
                    setGameStarted(true);
                    setShowGameResults(true)
                }}>YES</button>
                <button onClick={() => setShowGameResults(false)}>NO</button>
            </div>
        </div>
    );
}

export default GameResults;