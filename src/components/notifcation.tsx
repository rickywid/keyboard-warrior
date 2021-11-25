import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import "../styles/notification.css";

interface NotificationProps {
    label: string;
}

const Notification: FunctionComponent<NotificationProps> = ({ label }) => {

    const errorStyle = {
        background: '#bb0000',
        position: 'absolute',
        right: '17px',
        bottom: '-75px',
        borderRadius: '5px',
        fontWeight: 'bold',
        borderBottom: '3px solid #750101',
        zIndex: 1000
    }

    const errorAnimate = {
        y: 5
    }

    return (
        <motion.div
            className="notification"
            // @ts-ignore
            style={errorStyle}
            animate={errorAnimate}
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