import { FunctionComponent, useContext } from "react";
import { GameContext } from "../context/game";

interface WelcomeProps {
    // start: () => void;
}

const Welcome: FunctionComponent<WelcomeProps> = () => {

    const { setGameStarted } = useContext(GameContext);

    const handleOnClick = () => setGameStarted(true)

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleOnClick}>start game</button>
        </div>

    );
}

export default Welcome;