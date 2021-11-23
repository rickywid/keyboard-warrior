import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard';
import Scoreboard from './components/scoreboard';
import Timer from './components/timer';
import Welcome from './components/welcome';
import Word from './components/word';



const wordsList = ["HELLO", "WORLD"];


function App() {

    const [charCode, setCharCode] = useState<number | null>(null); // charcode of keydown key
    const [words, setWords] = useState<string[]>(wordsList); // list of words to render
    const [inputVal, setInputVal] = useState<string>(""); // input value
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // current character 
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [wordsAttempts, setWordsAttempts] = useState<number>(0);
    const [wordsCompleted, setWordsCompleted] = useState<number>(0);
    const [startTimer, setStartTimer] = useState<boolean>(false);

    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;

        if (words.length) {
            if (keyCode === 13) {
                if (inputVal.toUpperCase() === words[0]) {
                    setWordsCompleted(prevState => prevState + 1)
                    setInputVal("")
                    removeWord();

                    if (words.length === 0) {
                        setGameStarted(!gameStarted)
                    }
                }
            }
        }
    }, [inputVal, words]);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);


    const removeWord = () => {
        const wordsState = words;
        wordsState.shift();
        setWords(wordsState);
        setCurrentCharIndex(0)
        setInputVal("");
    }

    const displayWord = () => {
        return words.length ? (
            <Word
                word={words[0]}
                currentCharIndex={currentCharIndex}
            />
        ) : 'Done'
    }

    const handleInputChange = (e: any) => {
        const { value } = e.target;

        const isValid =
            words[0].charAt(currentCharIndex) ===
            value.charAt(currentCharIndex).toUpperCase();

        if (!isValid) {
            setWordsAttempts(prevState => prevState + 1)
        }
        setInputVal(isValid ? value : "");
        setCurrentCharIndex((prevCharIndex) => (isValid ? prevCharIndex + 1 : 0));
    }

    const updateGameStatus = () => {
        setGameStarted(!gameStarted)
        setStartTimer(!startTimer);
    };

    return (
        <div className="App">
            {gameStarted ? (
                <main>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Scoreboard
                            wordsAttempts={wordsAttempts}
                            wordsCompleted={wordsCompleted}
                        />
                        <Timer
                            startTimer={startTimer}
                            updateGameStatus={updateGameStatus}
                        />
                    </div>
                    {displayWord()}
                    <input
                        type="text"
                        style={{ width: '100%' }}
                        value={inputVal}
                        onChange={e => handleInputChange(e)}
                        onKeyDown={(e) => setCharCode(e.keyCode)}
                        onKeyUp={() => setCharCode(null)}
                        autoFocus
                    />
                    <Keyboard k={charCode as unknown as number} />
                </main>
            ) : (
                <Welcome
                    updateGameStatus={updateGameStatus}
                />
            )}
        </div>
    );
}

export default App;
