import { useContext } from 'react';
import './App.css';
import GameResults from './components/gameResults';
import Welcome from './components/welcome';
import { GameContext } from './context/game';
import Game from './components/game';


function App() {
    const {
        gameStarted,
        showGameResults,
    } = useContext(GameContext);


    return (
        <div className="App">
            <div className="body">
                {gameStarted ? (
                    <Game />
                ) : (
                    showGameResults ?
                        <GameResults /> :
                        <div>
                            <Welcome />
                        </div>
                )}
            </div>
        </div>
    );
}

export default App;
