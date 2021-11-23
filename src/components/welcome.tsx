import { FunctionComponent } from "react";

interface WelcomeProps {
    updateGameStatus: () => void;
}

const Welcome: FunctionComponent<WelcomeProps> = ({ updateGameStatus }) => {

    const handleOnClick = () => {
        updateGameStatus();
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleOnClick}>start game</button>
        </div>

    );
}

export default Welcome;