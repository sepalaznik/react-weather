import React, { useEffect, useState } from "react";

export function Clock() {
    const [currentTime, setCurrentTime] = useState({
        time: new Date().toLocaleTimeString(),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return currentTime.time;
}
