export function GetNextTime(props) {
    let options = { timeZone: props.timezone, hour: '2-digit', minute: '2-digit' };
    const now = new Date(props.dt * 1000);

    const nextTimes = now.toLocaleTimeString('ru-RU', options);

    return nextTimes;
};

export function GetNextDate(props) {
    let options = { timeZone: props.timezone, day: 'numeric', month: 'long' };
    const now = new Date(props.dt * 1000);

    const nextDayDate = now.toLocaleString('ru-RU', options);

    return nextDayDate;
};

export function GetNextWeekDay(props) {
    let options = { weekday: 'long' };
    const now = new Date(props.dt * 1000);

    const nextWeekDay = now.toLocaleString('ru-RU', options);
    
    const firstSymbolUC = (text) => {
        if (!text) return text;
        return text[0].toUpperCase() + text.slice(1);
    }
    
    return firstSymbolUC(nextWeekDay);
};
