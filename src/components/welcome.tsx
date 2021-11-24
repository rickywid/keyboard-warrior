import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import MenuAudio from '../assets/sound/menu.mp3';
import '../styles/welcome.css';

interface WelcomeProps { }

const Welcome: FunctionComponent<WelcomeProps> = () => {

    const { setGameStarted } = useContext(GameContext);
    const menuAudio = new Audio(MenuAudio);


    useEffect(() => {
        menuAudio.play();
        menuAudio.addEventListener('ended', () => {
            menuAudio.muted = true;
            menuAudio.currentTime = 0;
            menuAudio.play();
        })
        return () => {
            menuAudio.pause();
        }
    }, []);

    const handleOnClick = () => setGameStarted(true)

    return (
        <div className="welcome">
            <h1>KEYBOARD WARRIOR</h1>
            <button onClick={handleOnClick}>start game</button>
        </div>

    );
}

export default Welcome;