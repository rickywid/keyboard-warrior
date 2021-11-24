import { motion } from "framer-motion";
import { FunctionComponent, useContext } from "react";
import "../styles/notification.css";

interface NotificationProps {
    label: string;
}

const Notification: FunctionComponent<NotificationProps> = ({ label }) => {

    const enterStyle = {
        position: 'absolute',
        right: '-122px',
        top: '40%',
        background: 'green',
    }

    const enterAnimate = {
        x: -30
    }
    
    const errorStyle = {
        background: 'red'
    }
    
    const errorAnimate = {
        y: 20
    }

    const style = label === "Press Enter" ? enterStyle : errorStyle;
    const animate = label === "Press Enter" ? enterAnimate : errorAnimate;

    return (
        <motion.div
        className="notification"
            style={style}
            animate={animate}
            transition={{
                duration: 0.5,
                yoyo: Infinity
            }}
        >
            {label}
        </motion.div>
    );
}

export default Notification;