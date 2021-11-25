import { FunctionComponent, useContext, useEffect } from "react";
import { GameContext } from "../context/game";
import MenuAudio from '../assets/sound/menu.mp3';
import '../styles/welcome.css';
import SwordsPNG from '../assets/images/swords.png';
import useShuffle from "../hooks/shuffle";
import WordsList from '../words-list';

interface WelcomeProps { }

const Welcome: FunctionComponent<WelcomeProps> = () => {

    const {
        setGameStarted,
        setSoundOn,
        soundOn,
        setGameCategory,
        gameCategory,
        setDisplayNotification,
        setIsWordsMatch,
        setWords
    } = useContext(GameContext);

    const words = useShuffle(WordsList[gameCategory]);

    useEffect(() => {
        setWords(words);
    }, [setWords, words]);

    useEffect(() => {
        setDisplayNotification({
            error: false,
            enterBtn: false
        });
        setIsWordsMatch(false);
    }, [
        setDisplayNotification,
        setIsWordsMatch
    ])

    useEffect(() => {
        const menuAudio = new Audio(MenuAudio);

        if (soundOn) {
            menuAudio.play();
            menuAudio.addEventListener('ended', () => {
                menuAudio.muted = true;
                menuAudio.currentTime = 0;
                menuAudio.play();
            })
        }

        return () => {
            menuAudio.pause();
        }
    }, [soundOn]);

    const handleOnClick = () => setGameStarted(true)

    const handleSelectChange = (e: any) => {
        setGameCategory(e.target.value);
    }

    return (
        <div className="welcome">
            <img src={SwordsPNG} alt="words" />
            <h1>KEYBOARD WARRIOR</h1>
            <div className="btn-group">
                <select name="" id="" onChange={(e) => handleSelectChange(e)}>
                    <option value="">Select Category</option>
                    <option value="0">Canada</option>
                    <option value="1">Technology</option>
                    <option value="2">Sports</option>
                </select>
                <button onClick={() => setSoundOn(!soundOn)}>SOUND {soundOn ? "ON" : "OFF"}</button>
            </div>
            <button
                onClick={handleOnClick}
                className="start-btn"
            >START</button>
        </div>

    );
}

export default Welcome;