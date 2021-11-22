import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard';
import Word from './components/word';



const wordsList = ["HELLO", "WORLD"];


function App() {

    const [charCode, setCharCode] = useState<number | null>(null); // charcode of keydown key
    const [words, setWords] = useState<string[]>(wordsList); // list of words to render
    const [inputVal, setInputVal] = useState<string>(""); // input value
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0); // current character 
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const [prevChar, setPrevChar] = useState<string>(words.length ? words[0][0] : "");
    const [nextChar, setNextChar] = useState<string>(words.length ? words[0][1] : "");


    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;

        if (words.length) {
            if (keyCode === words[0][currentCharIndex].charCodeAt(0)) {
                setCurrentCharIndex(prevState => prevState + 1);
                setPrevChar(prevState => prevState + 1);
                setNextChar(prevState => prevState + 1);
                setIsMatch(true);
            } else {
                console.log(false)
                setIsMatch(false);
                setCurrentCharIndex(0)
                setInputVal("")
            }
        }
        // }
    }, [words, currentCharIndex]);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);


    const removeWord = () => {
        setInputVal("");

        const wordsState = words;
        wordsState.shift();
        console.log(wordsState)
        setWords(wordsState);
        setCurrentCharIndex(0)
    }

    const displayWord = () => {
        // console.log(words)
        return words.length ? (
            <Word
                word={words[0]}
                removeWord={removeWord}
                typedKey={charCode}
                currentCharIndex={currentCharIndex}
                isMatch={isMatch}
                prevChar={prevChar}
                nextChar={nextChar}
            />
        ) : 'Done'
    }

    const handleKeyPress = (e: any) => {
        // if (e.key !== 'Enter') {
        setCharCode(e.keyCode);
        // }
    }

    return (
        <div className="App">
            <main>
                {displayWord()}
                <input
                    type="text"
                    style={{ width: '100%' }}
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={e => handleKeyPress(e)}
                    onKeyUp={(e) => handleKeyPress(e)}
                    autoFocus
                />
                <Keyboard k={charCode as unknown as number} />
            </main>
        </div>
    );
}

export default App;
