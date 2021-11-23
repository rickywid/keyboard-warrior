import { createContext, useState } from 'react';

export const GameContext = createContext<any>(null);


const GameProvider = ({ children }: any) => {
    
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [wordsAttempts, setWordsAttempts] = useState<number>(0);
    const [wordsCompleted, setWordsCompleted] = useState<number>(0);
    const [startTimer, setStartTimer] = useState<boolean>(false);
    const [showGameResults, setShowGameResults] = useState<boolean>(false);

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
            setShowGameResults
        }} >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;