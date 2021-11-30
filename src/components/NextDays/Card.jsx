import React from "react";

import './NextDays.css';
import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';

export function Card(day) {
    return (
        <div className="weather__card">
            <div className="day__title">{day.week_day}</div>
            <div className="day__date">{day.day_date}</div>
            <div className="day__weather_logo">
                <WeatherSvgSelector id={day.icon_id} />
            </div>
            <div className="day__temperature">Днём: <span>{day.temp_day}&#176;</span></div>
            <div className="night__temperature">Ночью: <span>{day.temp_night}&#176;</span></div>
            <div className="cloudy">{day.info}</div>
        </div>
    )
};
