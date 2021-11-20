import { FunctionComponent, useEffect, useState } from "react";
import Char from "./char";

interface WordProps {
    word: string;
    charCode: number | null;
    length: number;
    removeWord: () => void;
    clearInput: () => void;
}

const Word: FunctionComponent<WordProps> = ({ word, charCode, length, removeWord, clearInput }) => {
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

    useEffect(() => {
        if (length === currentCharIndex) {
            removeWord();
            setCurrentCharIndex(0);
        }

        if (charCode === word.charCodeAt(currentCharIndex)) {
            console.log(true, charCode, word.charCodeAt(currentCharIndex))
            setCurrentCharIndex(prevState => prevState + 1);
        } else {
            console.log(false, charCode, word.charCodeAt(currentCharIndex))
            // inccorect letter 
            // clear input
            // move currentCharIndex back to 0
            clearInput();
            // setCurrentCharIndex(0);
        }
    }, [charCode, word, currentCharIndex, length, removeWord, clearInput]);

    const displayCharacter = () => {
        return word.split('').map((char, index) => {
            return (
                <Char
                    key={index}
                    character={char}
                    isMatch={currentCharIndex === index}
                />
            )
        })
    }

    const displaySecondaryCharacter = () => {
        return word.split('').map((char, index) => {
            return (
                <Char
                    key={index}
                    character={char}
                    secondary={true}
                />
            )
        })
    }

    return (
        <div><span>{displayCharacter()}</span> <span>{displaySecondaryCharacter()}</span> </div>
    );
}

export default Word;