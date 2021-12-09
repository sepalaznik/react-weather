export function GetCurrentDate(props) {
    let options = {timeZone: props.timezone, day: "numeric", month: "long" };
    const now = new Date();
    const currentDayInCity = new Intl.DateTimeFormat('ru', options).format(now);

    return currentDayInCity;

    // const now = new Date();
    // const monthsList =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    // const currentMonth = monthsList[now.getMonth()];
    // const currentDate = now.getDate();

    // return currentDate + ' ' + currentMonth;    
};
