export function DatesList() {
    const months =["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const now = new Date();
    
    const currentMonth = months[now.getMonth()];
    const currentDate = now.getDate();

    return currentDate + ' ' + currentMonth;
};

export function DaysList() {
    const days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const now = new Date();
    
    const currentDay = days[now.getDay()];

    return currentDay;
};
