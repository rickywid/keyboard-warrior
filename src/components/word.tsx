import { FunctionComponent, useEffect, useState } from "react";
import Char from "./char";

interface WordProps {
    word: string;
    typedKey: number | null;
    // length: number;
    removeWord: () => void;
    // clearInput: () => void;
    // updateCharPosition: (index: number) => void;
    prevChar: string;
    nextChar: string;
    currentCharIndex: number;
    isMatch: boolean;
}

const Word: FunctionComponent<WordProps> = ({ word, typedKey, currentCharIndex, removeWord, isMatch, prevChar, nextChar }) => {
    // const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

    useEffect(() => {
        
        if (currentCharIndex === word.length) {
            removeWord();
        }
    }, [currentCharIndex, removeWord, word]);

    const displayCharacter = () => {
        return word.split('').map((char, index) => {
            return (
                <Char
                    key={index}
                    character={char}
                    underline={currentCharIndex === index}
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