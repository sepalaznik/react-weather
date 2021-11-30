import React from "react";

import './NextDays.css';
import { Tabs } from './Tabs';
import { Card } from './Card';
import { GetNextDate, GetNextWeekDay } from "./DatesList/datesList";

export function NextDays() {
    const days = [
        {
            week_day: 'Сегодня',
            day_date: <GetNextDate dt_txt='2021-11-29' />,
            icon_id: '13d',
            temp_day: '+25',
            temp_night: '+20',
            info: 'Ясно',
        },
        {
            week_day: <GetNextWeekDay dt_txt='2021-11-30' />,
            day_date: <GetNextDate dt_txt='2021-11-30' />,
            icon_id: '11d',
            temp_day: '+24',
            temp_night: '+18',
            info: 'Облачно с прояснениями',
        },
        {
            week_day: <GetNextWeekDay dt_txt='2021-12-01' />,
            day_date: <GetNextDate dt_txt='2021-12-01' />,
            icon_id: '10n',
            temp_day: '+17',
            temp_night: '+12',
            info: 'Небольшой дождь и солнце',
        },
        {
            week_day: <GetNextWeekDay dt_txt='2021-12-02' />,
            day_date: <GetNextDate dt_txt='2021-12-02' />,
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
                {days.map((item, index) => (
                        <Card {...item} key={index} />
                ))}
            </div>
        </div>
    )
};
