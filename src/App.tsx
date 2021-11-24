import { useCallback, useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import './App.css';
import GameResults from './components/gameResults';
import Keyboard from './components/keyboard';
import Scoreboard from './components/scoreboard';
import Timer from './components/timer';
import Welcome from './components/welcome';
import Word from './components/word';
import { GameContext } from './context/game';
import Notification from "./components/notifcation";
import KeyboardWAV from './assets/sound/keyboard2.wav';
import ErrorWAV from './assets/sound/error.wav';
import GameMP3 from './assets/sound/game.mp3';
import MenuMP3 from './assets/sound/menu.mp3';

const wordsList = ["TORONTO", "MONTREAL", "VANCOUVER", "EDMONTON", "CALGARY", "OTTAWA", "SASKATCHEWAN"];

function App() {
      const KeyboardAudio = new Audio(KeyboardWAV);
      const ErrorAudio = new Audio(ErrorWAV);
      const GameAudio = new Audio(GameMP3);
      const MenuAudio = new Audio(MenuMP3);
      const keyboardAudio = () => KeyboardAudio.play();
      const errorAudio = () => ErrorAudio.play();
    //   const gameAudio = () => GameAudio.play();
    //   const menuAudio = () => MenuAudio.play();

    const {
        gameStarted,
        setGameStarted,
        wordsAttempts,
        setWordsAttempts,
        wordsCompleted,
        setWordsCompleted,
        startTimer,
        setStartTimer,
        showGameResults,
        setShowGameResults,
        displayNotification,
        setDisplayNotification
    } = useContext(GameContext);

    const [charCode, setCharCode] = useState<number | null>(null); // charcode of keydown key
    const [inputVal, setInputVal] = useState<string>(""); // input value
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // current character  
    const [disableInput, setDisableInput] = useState<boolean>(false);
    const [wordsListIndex, setWordsListIndex] = useState<number>(0);

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

    // useEffect(() => {
    //     GameAudio.addEventListener('ended', function () {
    //         MenuAudio.play();
    //     })
    //     MenuAudio.play();
    // }, [])

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


    const removeWord = () => {
        setWordsListIndex(prevState => prevState + 1);
        setCurrentCharIndex(0)
        setInputVal("");
    }

    const displayWord = () => {
        return (
            <Word
                word={wordsList[wordsListIndex]}
                currentCharIndex={currentCharIndex}
            />
        )
    }

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
            errorAudio();
        } else {
            setDisplayNotification({
                enterBtn: false,
                error: false
            })
        }
        setInputVal(isValid ? value : "");
        setCurrentCharIndex((prevCharIndex) => (isValid ? prevCharIndex + 1 : 0));
    }

    const start = () => {
        setGameStarted(true)
        setStartTimer(true);
        setShowGameResults(true);
        setWordsListIndex(0);
        setWordsAttempts(0);
        setWordsCompleted(0);
        // MenuAudio.play();
    };

    const stop = () => {
        console.log('stop')
        // MenuAudio.play();
        setGameStarted(false)
        setStartTimer(false);
    };

    const updateGameResults = (val: boolean) => {
        setShowGameResults(val);
    }

    return (
        <div className="App">
            {gameStarted ? (
                <main>
                    <div className="game-info">
                        <Scoreboard
                            wordsAttempts={wordsAttempts}
                            wordsCompleted={wordsCompleted}
                        />
                        <Timer
                            startTimer={startTimer}
                            start={start}
                            stop={stop}
                        />
                    </div>
                    {displayNotification.error &&
                        <Notification label="error" />}
                    {displayWord()}

                    <input
                        type="text"
                        style={{ width: '100%' }}
                        value={inputVal}
                        onChange={e => handleInputChange(e)}
                        onKeyDown={(e) => {
                            setCharCode(e.keyCode)
                            keyboardAudio();
                        }}
                        onKeyUp={() => setCharCode(null)}
                        autoFocus
                        readOnly={disableInput}
                    />
                    <div style={{ position: 'relative' }}>
                        <Keyboard k={charCode as unknown as number} />
                        {displayNotification.enterBtn &&
                            <Notification label="Press Enter" />
                        }
                    </div>
                </main>
            ) : (
                showGameResults ?
                    <GameResults
                        start={start}
                        updateGameResults={updateGameResults}
                    /> :
                    <Welcome
                        start={start}
                    />
            )}
        </div>
    );
}

export default App;
