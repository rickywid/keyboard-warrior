import Char from "./char";

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
        <div><span>{displayCharacter()}</span></div>
    );
}

export default Word;
