import { useEffect, useState } from "react";

export function Clock(props) {
    let options = {timeZone: props.timezone};

    const [currentTime, setCurrentTime] = useState({
        time: new Date().toLocaleTimeString('ru-Ru', options),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime({
                time: new Date().toLocaleTimeString('ru-Ru', options),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [props]);

    return currentTime.time;
};

