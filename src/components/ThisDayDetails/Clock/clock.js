import { useEffect, useState } from "react";

export function Clock(props) {

    const [currentTime, setCurrentTime] = useState({
        time: new Date().toLocaleTimeString(),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime({
                time: new Date((new Date().getTime() - (3 * 3600 * 1000)) + (props.timezone)).toLocaleTimeString(),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [props]);

    return currentTime.time;
};
