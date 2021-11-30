export function GetNextDate(props) {
    let options = { day: 'numeric', month: 'long' };
    const now = new Date(props.dt_txt);

    const nextDayDate = now.toLocaleString('ru-RU', options);

    return nextDayDate;
};

export function GetNextWeekDay(props) {
    let options = { weekday: 'long' };
    const now = new Date(props.dt_txt);

    const nextWeekDay = now.toLocaleString('ru-RU', options);

    return nextWeekDay;
};
