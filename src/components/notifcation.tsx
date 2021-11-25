import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import "../styles/notification.css";
import ArrowPNG from '../assets/images/arrow.png';

interface NotificationProps {
    label: string;
}

const Notification: FunctionComponent<NotificationProps> = ({ label }) => {

    const enterStyle = {
        position: 'absolute',
        right: '-80px',
        top: '33%',
    }

    const enterAnimate = {
        x: -30
    }

    const errorStyle = {
        background: '#bb0000',
        position: 'absolute',
        right: '17px',
        bottom: '-75px',
        borderRadius: '5px',
        fontWeight: 'bold',
        borderBottom: '3px solid #750101'
    }

    const errorAnimate = {
        y: 5
    }

    const style = label === "" ? enterStyle : errorStyle;
    const animate = label === "" ? enterAnimate : errorAnimate;

    return (
        <motion.div
            className="notification"
            // @ts-ignore
            style={style}
            animate={animate}
            transition={{
                duration: 0.5,
                yoyo: Infinity
            }}
        >
            {label ? label : <img src={ArrowPNG} alt="arrow" />}
        </motion.div>
    );
}

export default Notification;