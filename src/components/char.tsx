import { FunctionComponent } from "react";

interface CharProps {
    character: string;
    underline?: boolean;
    secondary?: boolean;
}

const Char: FunctionComponent<CharProps> = ({ character, underline, secondary }) => {

    const style = {
        display: 'inline-block',
        textDecoration: underline ? 'underline' : 'none',
        color: secondary ? '#cfcece' : '',
    }

    return character !== " " ? (
        <h1 style={style}>{character}</h1 >
    ) : <h1 style={style}>&nbsp;</h1 >;
}

export default Char;