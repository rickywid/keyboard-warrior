import { createContext, useState } from 'react';

export const GameContext = createContext<any>(null);


const GameProvider = ({ children }: any) => {
    
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [wordsAttempts, setWordsAttempts] = useState<number>(0);
    const [wordsCompleted, setWordsCompleted] = useState<number>(0);
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [showGameResults, setShowGameResults] = useState<boolean>(false);
    const [displayNotification, setDisplayNotification] = useState<{ enterBtn: boolean, error: boolean }>({ enterBtn: false, error: false });


    return (
        <GameContext.Provider value={{
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
        }} >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;