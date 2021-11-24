import Char from "./char";
import '../styles/word.css';

interface WordProps {
    word: string;
    currentCharIndex: number;
}

const Word = ({ word, currentCharIndex }: WordProps) => {

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

    return (
        <div className="word">
            {displayCharacter()}
        </div>
    );
}

export default Word;
