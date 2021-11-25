import { useContext, useState } from "react";
import { GameContext } from "../context/game";
import useInterval from "../hooks/useInterval";

function Timer() {

    const { gameStarted, setShowGameResults, setGameStarted } = useContext(GameContext);
    const [seconds, setSeconds] = useState(5);
    const [minutes, setMinutes] = useState(100);

    // How to use setInterval w/ React
    // https://overreacted.io/making-setinterval-declarative-with-react-hooks/

    useInterval(() => {
        if (gameStarted) {
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1)
                } else {
                    // stop();
                    setGameStarted(false);
                    setShowGameResults(true);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }
    }, 1000);

    const secondsTimer = seconds < 10 ? `0${seconds}` : seconds;
    const minutesTimer = minutes < 10 ? `0${minutes}` : minutes;

    return (
        <div className="timer">
            <h2 className="minutes">{minutesTimer}:</h2>
            <h2 className="seconds">{secondsTimer}</h2>
        </div>
    );
}

export default Timer;
