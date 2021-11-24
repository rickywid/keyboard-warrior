import { FunctionComponent, useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/game";
import Scoreboard from "./scoreboard";
import Timer from "./timer";
import Notification from "./notifcation";
import Word from "./word";
import Keyboard from "./keyboard";
import GameAudio from '../assets/sound/game.mp3';

interface GameProps {

}

const Game: FunctionComponent<GameProps> = () => {

    const wordsList = ["TORONTO", "MONTREAL", "VANCOUVER", "EDMONTON", "CALGARY", "OTTAWA", "SASKATCHEWAN"];

    const gameAudio = new Audio(GameAudio);

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
        showGameResults,
        setShowGameResults,
        displayNotification,
        setDisplayNotification
    } = useContext(GameContext);


    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;
        if (inputVal.toUpperCase() === wordsList[wordsListIndex]) {

            if (wordsListIndex === wordsList.length - 1) {
                setGameStarted(!gameStarted);
            }

            if (keyCode === 13) {
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

    }, [inputVal]);

    useEffect(() => {
        if (inputVal.toUpperCase() === wordsList[wordsListIndex]) {
            setDisplayNotification({
                error: false,
                enterBtn: true
            });
            setDisableInput(true);
        }
    }, [inputVal])

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const displayWord = () => {
        return (
            <Word
                word={wordsList[wordsListIndex]}
                currentCharIndex={currentCharIndex}
            />
        )
    }

    useEffect(() => {
        gameAudio.play();
        return () => {
            gameAudio.pause();
        }
    }, []);

    const handleInputChange = (e: any) => {
        const { value } = e.target;

        const isValid =
            wordsList[wordsListIndex].charAt(currentCharIndex) ===
            value.charAt(currentCharIndex).toUpperCase();

        if (!isValid) {
            setWordsAttempts(wordsAttempts + 1)
            setDisplayNotification({
                enterBtn: false,
                error: true
            })
        } else {
            setDisplayNotification({
                enterBtn: false,
                error: false
            })
        }
        setInputVal(isValid ? value : "");
        setCurrentCharIndex((prevCharIndex) => (isValid ? prevCharIndex + 1 : 0));
    }

    const removeWord = () => {
        setWordsListIndex(prevState => prevState + 1);
        setCurrentCharIndex(0)
        setInputVal("");
    }



    const start = () => {
        setGameStarted(true)
        setShowGameResults(true);
        setWordsListIndex(0);
        setWordsAttempts(0);
        setWordsCompleted(0);
    };

    return (
        <main>
            <div className="game-info">
                <Scoreboard
                    wordsAttempts={wordsAttempts}
                    wordsCompleted={wordsCompleted}
                />
                <Timer
                />
            </div>
            {displayNotification.error && <Notification label="error" />}
            {displayWord()}

            <input
                type="text"
                style={{ width: '100%' }}
                value={inputVal}
                onChange={e => handleInputChange(e)}
                onKeyDown={(e) => {
                    setCharCode(e.keyCode)
                }}
                onKeyUp={() => setCharCode(null)}
                autoFocus
                readOnly={disableInput}
            />
            <div style={{ position: 'relative' }}>
                <Keyboard k={charCode as unknown as number} />
                {displayNotification.enterBtn && <Notification label="Press Enter" />}
            </div>
        </main>
    );
}

export default Game;