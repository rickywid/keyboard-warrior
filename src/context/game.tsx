import { createContext, useState } from 'react';

/** MISSION CONTROL CENTRE */


export const GameContext = createContext<any>(null);

const GameProvider = ({ children }: any) => {

    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [wordsAttempts, setWordsAttempts] = useState<number>(0);
    const [wordsCompleted, setWordsCompleted] = useState<number>(0);
    const [showGameResults, setShowGameResults] = useState<boolean>(false);
    const [displayNotification, setDisplayNotification] = useState<{ enterBtn: boolean, error: boolean }>({ enterBtn: false, error: false });
    const [isWordsMatch, setIsWordsMatch] = useState<boolean>(false);
    const [soundOn, setSoundOn] = useState<boolean>(true);
    const [gameCategory, setGameCategory] = useState<number>(0);
    const [gameScore, setGameScore] = useState<number>(0);
    const [words, setWords] = useState<string[]>();

    return (
        <GameContext.Provider value={{
            gameStarted,
            setGameStarted,
            wordsAttempts,
            setWordsAttempts,
            wordsCompleted,
            setWordsCompleted,
            showGameResults,
            setShowGameResults,
            displayNotification,
            setDisplayNotification,
            isWordsMatch,
            setIsWordsMatch,
            soundOn,
            setSoundOn,
            gameCategory,
            setGameCategory,
            gameScore,
            setGameScore,
            words,
            setWords
        }} >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;