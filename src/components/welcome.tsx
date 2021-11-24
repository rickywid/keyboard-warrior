import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import MenuAudio from '../assets/sound/menu.mp3';

interface WelcomeProps { }

const Welcome: FunctionComponent<WelcomeProps> = () => {

    const { setGameStarted } = useContext(GameContext);
    const menuAudio = new Audio(MenuAudio);

    useEffect(() => {
        menuAudio.play();
        return () => {
            menuAudio.pause();
        }
    }, []);

    const handleOnClick = () => setGameStarted(true)

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleOnClick}>start game</button>
        </div>

    );
}

export default Welcome;