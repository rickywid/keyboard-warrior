import { FunctionComponent } from "react";

interface KeyProps {
    val: string;
    isPressed: boolean;
    isSpacebar?: boolean;
}

const Key: FunctionComponent<KeyProps> = ({ val, isPressed, isSpacebar }) => {

    const style = {
        display: 'inline-block',
        marginRight: 20,
        width: isSpacebar ? 300 : 50,
        height: 50,
        // boxShadow: isPressed ? '0px 0px 15px 7px rgba(149,253,247,0.75)' : 'none',
        borderLeft: isPressed ? '2px solid #6d6d6d' : '1px solid black',
        borderRight: isPressed ? '2px solid #6d6d6d' : '1px solid black',
        borderTop: isPressed ? '2px solid #6d6d6d' : '1px solid black',
        borderBottom: '3px solid #6d6d6d',
        borderRadius: '5px',
        margin: 5,
        flex: val ==='DEL' || val === 'ENTER' || val === 'SHFT' ? 'auto' : 'inherit'
    }

    const style2 = {
        padding: 0
    }


    return (
        <div style={style}>
            <p style={style2}>{val}</p>
        </div>
    );
}

export default Key;