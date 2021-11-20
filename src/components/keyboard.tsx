import { FunctionComponent } from "react";
import Key from "./key";

interface KeyboardProps {
    k: number;
}

const Keyboard: FunctionComponent<KeyboardProps> = ({ k }) => {

    const style = {
        border: '1px solid black',
        // paddingLeft: 30

    }
    const style2 = {
        display: 'flex',
        justifyContent: 'center',
        // paddingLeft: 30
    }

    const style3 = {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 30
    }

    const style4 = {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 80
    }

    return (
        <div style={style}>
            <div style={style2}>
                <Key val="Q" isPressed={k ===  81 ? true : false} />
                <Key val="W" isPressed={k ===  87 ? true : false} />
                <Key val="E" isPressed={k ===  69 ? true : false} />
                <Key val="R" isPressed={k ===  82 ? true : false} />
                <Key val="T" isPressed={k ===  84 ? true : false} />
                <Key val="Y" isPressed={k ===  89 ? true : false} />
                <Key val="U" isPressed={k ===  85 ? true : false} />
                <Key val="I" isPressed={k ===  73 ? true : false} />
                <Key val="O" isPressed={k ===  79 ? true : false} />
                <Key val="P" isPressed={k ===  80 ? true : false} />
                <Key val="DEL" isPressed={k ===  8 ? true : false}/>
            </div>
            <div style={style3}>
                <Key val="A" isPressed={k ===  65 ? true : false} />
                <Key val="S" isPressed={k ===  83 ? true : false} />
                <Key val="D" isPressed={k ===  68 ? true : false} />
                <Key val="F" isPressed={k ===  70 ? true : false} />
                <Key val="G" isPressed={k ===  71 ? true : false} />
                <Key val="H" isPressed={k ===  72 ? true : false} />
                <Key val="J" isPressed={k ===  74 ? true : false} />
                <Key val="K" isPressed={k ===  75 ? true : false} />
                <Key val="L" isPressed={k ===  76 ? true : false} />
                <Key val="ENTER" isPressed={k ===  13 ? true : false} />
            </div>
            <div style={style4}>
                <Key val="Z" isPressed={k ===  90 ? true : false} />
                <Key val="X" isPressed={k ===  88 ? true : false} />
                <Key val="C" isPressed={k ===  67 ? true : false} />
                <Key val="V" isPressed={k ===  86 ? true : false} />
                <Key val="B" isPressed={k ===  66 ? true : false} />
                <Key val="N" isPressed={k ===  78 ? true : false} />
                <Key val="M" isPressed={k ===  77 ? true : false} />
                <Key val="SHFT" isPressed={k ===  16 ? true : false} />
            </div>
            <div style={style2}>
                <Key val="" isPressed={k ===  32 ? true : false} isSpacebar={true} />
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