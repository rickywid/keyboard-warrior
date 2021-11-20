import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import Word from './components/word';



const wordsList = ["HELLO", "WORLD"];


function App() {

  const [charCode, setCharCode] = useState<number | null>(null);
  const [words, setWords] = useState<string[]>(wordsList);
  const [inputVal, setInputVal] = useState<string>("");

  const handleKeyDown = (e: any) => setCharCode(e.keyCode);
  // const handleKeyUp = () => setCharCode(charCode);

  const clearInput = () => {
    setInputVal("");
  }

  const removeWord = () => {
    const newState = words;
    newState.shift();
    setWords(newState)
  }

  const displayWord = () => {
    return words.length ? (
      <Word
        word={words[0]}
        charCode={charCode}
        length={words[0].length}
        removeWord={removeWord}
        clearInput={clearInput}
      />
    ) : 'Done'
  }

  return (
    <div className="App">
      <main>
        {displayWord()}
        <input
          type="text"
          style={{ width: '100%' }}
          onChange={e => setInputVal(e.target.value)}
          value={inputVal}
          onKeyDown={handleKeyDown}
          // onKeyUp={handleKeyUp}
          autoFocus
        />
        <Keyboard k={charCode as unknown as number} />
      </main>
    </div>
  );
}

export default App;
