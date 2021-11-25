import React from "react";

import './NextDays.css';
import { Tabs } from './Tabs';
import { Card } from './Card';
import { DatesList, DaysList } from "../../model/datesList";

export function NextDays() {
    const days = [
        {
            week_day: <DaysList/>,
            day_date: <DatesList/>,
            icon_id: '13d',
            temp_day: '+25',
            temp_night: '+20',
            info: 'Ясно',
        },
        {
            week_day: 'Завтра',
            day_date: '19 ноя',
            icon_id: '11d',
            temp_day: '+24',
            temp_night: '+18',
            info: 'Облачно с прояснениями',
        },
        {
            week_day: 'Суббота',
            day_date: '20 ноя',
            icon_id: '10n',
            temp_day: '+17',
            temp_night: '+12',
            info: 'Небольшой дождь и солнце',
        },
        {
            week_day: 'Воскресение',
            day_date: '21 ноя',
            icon_id: '02n',
            temp_day: '+10',
            temp_night: '+7',
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
