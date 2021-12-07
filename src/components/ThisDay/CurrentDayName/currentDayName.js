export function GetCurrentDate() {
    const monthsList =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const now = new Date();
    const currentMonth = monthsList[now.getMonth()];
    const currentDate = now.getDate();

    return currentDate + ' ' + currentMonth;
};
