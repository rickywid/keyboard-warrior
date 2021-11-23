import { FunctionComponent } from "react";

interface WelcomeProps {
    start: () => void;
}

const Welcome: FunctionComponent<WelcomeProps> = ({ start }) => {

    const handleOnClick = () => {
        start();
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleOnClick}>start game</button>
        </div>

    );
}

export default Welcome;