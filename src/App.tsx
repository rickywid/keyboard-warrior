import { useContext } from 'react';
import './App.css';
import GameResults from './components/gameResults';
import Welcome from './components/welcome';
import { GameContext } from './context/game';
import KeyboardWAV from './assets/sound/keyboard2.wav';
import ErrorWAV from './assets/sound/error.wav';
import GameMP3 from './assets/sound/game.mp3';
import MenuMP3 from './assets/sound/menu.mp3';
import Game from './components/game';


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
