import { FunctionComponent } from "react";
import Key from "./key";
import "../styles/keyboard.css";

interface KeyboardProps {
    k: number;
}

const Keyboard: FunctionComponent<KeyboardProps> = ({ k }) => {

    return (
        <div className="keyboard">
            <div className="keyboard-keys">
                <Key val="`~" colorScheme="white" />
                <Key val="1" colorScheme="white" />
                <Key val="2" colorScheme="white" />
                <Key val="3" colorScheme="white" />
                <Key val="4" colorScheme="white" />
                <Key val="5" colorScheme="white" />
                <Key val="6" colorScheme="white" />
                <Key val="7" colorScheme="white" />
                <Key val="8" colorScheme="white" />
                <Key val="9" colorScheme="white" />
                <Key val="0" colorScheme="white" />
                <Key val="-_" colorScheme="white" />
                <Key val="=-" colorScheme="white" />
                <Key val="Backspace" colorScheme="grey" stretch={true} />
            </div>
            <div className="keyboard-keys">
                <Key val="Tab" colorScheme="grey" stretch={true} />
                <Key val="Q" isPressed={k === 81 ? true : false} colorScheme="white" />
                <Key val="W" isPressed={k === 87 ? true : false} colorScheme="white" />
                <Key val="E" isPressed={k === 69 ? true : false} colorScheme="white" />
                <Key val="R" isPressed={k === 82 ? true : false} colorScheme="white" />
                <Key val="T" isPressed={k === 84 ? true : false} colorScheme="white" />
                <Key val="Y" isPressed={k === 89 ? true : false} colorScheme="white" />
                <Key val="U" isPressed={k === 85 ? true : false} colorScheme="white" />
                <Key val="I" isPressed={k === 73 ? true : false} colorScheme="white" />
                <Key val="O" isPressed={k === 79 ? true : false} colorScheme="white" />
                <Key val="P" isPressed={k === 80 ? true : false} colorScheme="white" />
                <Key val="[ {" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val="] }" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val="\ |" isPressed={k === 8 ? true : false} colorScheme="white" stretch={true} />
            </div>
            <div className="keyboard-keys middle">
                <Key val="Caps" colorScheme="grey" stretch={true} />
                <Key val="A" isPressed={k === 65 ? true : false} colorScheme="white" />
                <Key val="S" isPressed={k === 83 ? true : false} colorScheme="white" />
                <Key val="D" isPressed={k === 68 ? true : false} colorScheme="white" />
                <Key val="F" isPressed={k === 70 ? true : false} colorScheme="white" />
                <Key val="G" isPressed={k === 71 ? true : false} colorScheme="white" />
                <Key val="H" isPressed={k === 72 ? true : false} colorScheme="white" />
                <Key val="J" isPressed={k === 74 ? true : false} colorScheme="white" />
                <Key val="K" isPressed={k === 75 ? true : false} colorScheme="white" />
                <Key val="L" isPressed={k === 76 ? true : false} colorScheme="white" />
                <Key val=": ;" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val={`' "`} isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val="ENTER" isPressed={k === 13 ? true : false} colorScheme="orange" stretch={true} />
            </div>
            <div className="keyboard-keys bottom">
                <Key val="Shift" colorScheme="grey" stretch={true} />
                <Key val="Z" isPressed={k === 90 ? true : false} colorScheme="white" />
                <Key val="X" isPressed={k === 88 ? true : false} colorScheme="white" />
                <Key val="C" isPressed={k === 67 ? true : false} colorScheme="white" />
                <Key val="V" isPressed={k === 86 ? true : false} colorScheme="white" />
                <Key val="B" isPressed={k === 66 ? true : false} colorScheme="white" />
                <Key val="N" isPressed={k === 78 ? true : false} colorScheme="white" />
                <Key val="M" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val=", <" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val=". >" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val="/ ?" isPressed={k === 77 ? true : false} colorScheme="white" />
                <Key val="SHFT" colorScheme="grey" stretch={true} />
            </div>
            <div className="keyboard-layout">
                <Key val="Ctrl" colorScheme="grey" stretch={true} />
                <Key val="Fn" colorScheme="grey" />
                <Key val="Alt" colorScheme="grey" />
                <Key val=" " isPressed={k === 32 ? true : false} isSpacebar={true} colorScheme="orange" />
                <Key val="Alt" colorScheme="grey" />
                <Key val="Fn" colorScheme="grey" />
                <Key val="PrtSc" colorScheme="grey" />
                <Key val="Ctrl" colorScheme="grey" stretch={true} />
            </div>
        </div>
    );
}

export default Keyboard;




/**

                Q W E R T Y U I O P DEL
                 A S D F G H J K L ENTER
                  Z X C V B N M SHIFT
                      SPACEBAR


 */