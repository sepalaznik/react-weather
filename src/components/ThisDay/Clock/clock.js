import { useEffect, useState } from "react";

export function Clock(props) {
    let options = {timeZone: props.timezone};

    const [currentTime, setCurrentTime] = useState({
        time: new Date().toLocaleTimeString('ru', options),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime({
                time: new Date((new Date().getTime() - (3600 * 1000))).toLocaleTimeString('ru', options),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [props]);

    return currentTime.time;
};
