import { FunctionComponent, useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/game";
import Scoreboard from "./scoreboard";
import Timer from "./timer";
import Notification from "./notifcation";
import Word from "./word";
import Keyboard from "./keyboard";
import GameAudio from '../assets/sound/game.mp3';
import '../styles/game.css';
import WordsList from '../words-list';

interface GameProps {

}

const Game: FunctionComponent<GameProps> = () => {

    const [charCode, setCharCode] = useState<number | null>(null); // charcode of keydown key
    const [inputVal, setInputVal] = useState<string>(""); // input value
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // current character  
    const [disableInput, setDisableInput] = useState<boolean>(false);
    const [wordsListIndex, setWordsListIndex] = useState<number>(0);

    const {
        gameStarted,
        setGameStarted,
        wordsAttempts,
        setWordsAttempts,
        wordsCompleted,
        setWordsCompleted,
        setShowGameResults,
        displayNotification,
        setDisplayNotification,
        setIsWordsMatch,
        soundOn,
        gameCategory
    } = useContext(GameContext);


    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;

        if (inputVal.toUpperCase() === WordsList[gameCategory][wordsListIndex]) {
            if (wordsListIndex === WordsList[gameCategory].length - 1) {
                setGameStarted(!gameStarted);
                setShowGameResults(true);
            }

            if (keyCode === 13) {
                setIsWordsMatch(false);
                setWordsCompleted(wordsCompleted + 1)
                setInputVal("")
                removeWord();
                setDisableInput(false);
                setDisplayNotification({
                    error: false,
                    enterBtn: false
                });
            }
        }

    }, [inputVal, gameCategory, gameStarted, setDisplayNotification, setGameStarted, setIsWordsMatch, setShowGameResults, setWordsCompleted, wordsCompleted, wordsListIndex]);

    useEffect(() => {
        if (inputVal.toUpperCase() === WordsList[gameCategory][wordsListIndex]) {
            setDisplayNotification({
                error: false,
                enterBtn: true
            });
            setDisableInput(true);
            setIsWordsMatch(true);
        }
    }, [inputVal, gameCategory, setDisplayNotification, setIsWordsMatch, wordsListIndex])

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const displayWord = () => {
        return (
            <Word
                word={WordsList[gameCategory][wordsListIndex]}
                currentCharIndex={currentCharIndex}
            />
        )
    }

    useEffect(() => {
        const gameAudio = new Audio(GameAudio);

        if (soundOn) {
            gameAudio.play();
            gameAudio.addEventListener('ended', () => {
                console.log('ended')
                gameAudio.currentTime = 0;
                gameAudio.play();
            })
        }

        return () => {
            gameAudio.pause();
        }
    }, [soundOn]);

    const handleInputChange = (e: any) => {
        const { value } = e.target;

        const isValid =
            WordsList[gameCategory][wordsListIndex].charAt(currentCharIndex) ===
            value.charAt(currentCharIndex).toUpperCase();

        if (!isValid) {
            setWordsAttempts(wordsAttempts + 1)
            setDisplayNotification({
                enterBtn: false,
                error: true
            });
        } else {
            setDisplayNotification({
                enterBtn: false,
                error: false
            });
        }
        setInputVal(isValid ? value : "");
        setCurrentCharIndex((prevCharIndex) => (isValid ? prevCharIndex + 1 : 0));
    }

    const removeWord = () => {
        setWordsListIndex(prevState => prevState + 1);
        setCurrentCharIndex(0)
        setInputVal("");
    }

    return (
        <main className="game">
            <div className="game-top-bar">
                {displayWord()}
                {displayNotification.error && <Notification label="TRY AGAIN" />}
            </div>
            <input
                type="text"
                className="input"
                value={inputVal}
                onChange={e => handleInputChange(e)}
                onKeyDown={(e) => {
                    setCharCode(e.keyCode)
                }}
                onKeyUp={() => setCharCode(null)}
                autoFocus
                readOnly={disableInput}
            />
            <div className="game-info">
                <Scoreboard
                    wordsAttempts={wordsAttempts}
                    wordsCompleted={wordsCompleted}
                />
                <Timer
                />
            </div>
            <div style={{ position: 'relative' }}>
                <Keyboard k={charCode as unknown as number} />
                {/* {displayNotification.enterBtn && <Notification label="" />} */}
            </div>
            <button onClick={() => setGameStarted(false)}>back</button>
        </main>
    );
}

export default Game;