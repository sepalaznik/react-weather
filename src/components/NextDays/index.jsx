import React from "react";

import './NextDays.css';
import { Tabs } from './Tabs';
import { Card } from './Card';

export function NextDays() {
    const days = [
        {
            week_day: 'Сегодня',
            day_date: '18 ноя',
            icon_id: 'sun',
            temp_day: '+25',
            temp_night: '+20',
            info: 'Ясно',
        },
        {
            week_day: 'Завтра',
            day_date: '19 ноя',
            icon_id: 'small_rain',
            temp_day: '+24',
            temp_night: '+21',
            info: 'Небольшой дождь и солнце',
        },
        {
            week_day: 'Суббота',
            day_date: '20 ноя',
            icon_id: 'cloudy_sun',
            temp_day: '+20',
            temp_night: '+15',
            info: 'Облачно с прояснениями',
        },
        {
            week_day: 'Воскресение',
            day_date: '21 ноя',
            icon_id: 'cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            week_day: 'Понедельник',
            day_date: '22 ноя',
            icon_id: 'rain',
            temp_day: '+15',
            temp_night: '+11',
            info: 'Дождь',
        },
        {
            week_day: 'Вторник',
            day_date: '22 ноя',
            icon_id: 'sun',
            temp_day: '+17',
            temp_night: '+12',
            info: 'Ясно',
        },
        {
            week_day: 'Среда',
            day_date: '23 ноя',
            icon_id: 'cloudy',
            temp_day: '+18',
            temp_night: '+12',
            info: 'Облачно',
        },
    ];

    return (
        <div className="forecast__duration">
            <Tabs />
            <div className="next__days">    
                {days.map((day) => (
                        <Card {...day} key={day.week_day + day.day_date} />
                ))}
            </div>
        </div>
    )
};
