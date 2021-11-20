import { FunctionComponent, useState } from "react";

interface CharProps {
    character: string;
    isMatch?: boolean;
    secondary?: boolean;
}

const Char: FunctionComponent<CharProps> = ({ character, isMatch, secondary }) => {

    const style = {
        display: 'inline-block',
        textDecoration: isMatch ? 'underline' : 'none',
        color: secondary ? '#cfcece' : '',
        // float: secondary ? 'right' : 'none'
    }
    return (
        <h1 style={style}>{character}</h1 >
    );
}

export default Char;