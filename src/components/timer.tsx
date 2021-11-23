import { useState } from "react";
import useInterval from "../hooks/useInterval";
// import AlarmWAV from './alarm1.wav';
// import AudioImg from "./audio.png";

interface ITimer {
    startTimer: boolean;
    updateGameStatus: () => void;
}

function Timer({ startTimer, updateGameStatus }: ITimer) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(1);
    //   const [startTimer, setStartTimer] = useState<boolean>(false);
    //   const Alarm = new Audio(AlarmWAV);

    //   const playAudio = () => Alarm.play();

    // How to use setInterval w/ React
    // https://overreacted.io/making-setinterval-declarative-with-react-hooks/

    useInterval(() => {
        if (startTimer) {
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1)
                } else {
                    updateGameStatus();
                    //   playAudio();
                    //   setStartTimer(false);
                    // setMinutes(25);
                    // setSeconds(0);

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
