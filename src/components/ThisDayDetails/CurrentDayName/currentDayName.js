export function GetCurrentDate(props) {
    const now = new Date(new Date().getTime() - (3 * 3600 * 1000) + (props.timezone));
    //let options = {day: "numeric", month: "long"};
    //const currentDayInCity = new Intl.DateTimeFormat('ru', options).format(now);
    //return currentDayInCity;

    const monthsList =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const currentMonth = monthsList[now.getMonth()];
    const currentDate = now.getDate();

    return currentDate + ' ' + currentMonth;    
};
