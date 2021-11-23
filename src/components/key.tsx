import { FunctionComponent, useEffect, useState } from "react";
import "../styles/key.css";

interface KeyProps {
    val?: string;
    colorScheme: string;
    isPressed?: boolean;
    isSpacebar?: boolean;
    stretch?: boolean;
}

const Key: FunctionComponent<KeyProps> = ({ val, isPressed, isSpacebar, colorScheme, stretch }) => {


    // primary: letters
    // secondary: spacebar, enter
    // third: delete, alt, shift, ctrl, tab, caps


    const [primary, setPrimary] = useState<string[]>([]);
    const [keyColor, setKeyColor] = useState<string>("");

    useEffect(() => {


        switch (colorScheme) {
            case 'white':
                setPrimary(["#d6cec3", "#aea995"])
                setKeyColor('black')

                break;

            case 'orange':
                setPrimary(["#e58952", "#a0470e"]);
                break;

            case 'grey':
                setPrimary(["#4e4b51", "#161314"]);
                setKeyColor('white')
                break;
        }
    }, [colorScheme])


    const style = {
        borderLeft: isPressed ? `2px solid ${primary[0]}` : `5px solid ${primary[1]}`,
        borderRight: isPressed ? `2px solid ${primary[0]}` : `5px solid ${primary[1]}`,
        borderTop: isPressed ? `2px solid ${primary[0]}` : `1px solid ${primary[1]}`,
        borderBottom: isPressed ? `2px solid ${primary[0]}` : `5px solid ${primary[1]}`,
        width: isSpacebar ? 300 : 50,
        flex: stretch ? 'auto' : 'inherit',
        background: primary[0],
        color: keyColor,
        position: 'relative',
        height: !val ? 20 : 'intiial',
        margin: !val ? 0 : 1,

}

const style2 = {
    padding: 0,
    margin: 0,
    top: 5,
    right: '33%',
}

return (
    // @ts-ignore
    <div className="key" style={style}>
        <p style={style2}>{val}</p>
    </div>
);
}

export default Key;