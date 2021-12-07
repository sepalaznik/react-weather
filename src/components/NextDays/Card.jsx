import React from "react";

import './NextDays.css';
import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { GetNextDate, GetNextWeekDay } from "./DatesList/datesList";

export function Card(item) {
    return (
        <div className="weather__card">
            <div className="day__title"><GetNextWeekDay dt={item.dt} /></div>
            <div className="day__date"><GetNextDate dt={item.dt} /></div>
            <div className="day__weather_logo">
                <WeatherSvgSelector id={item.weather[0].icon} />
            </div>
            <div className="day__temperature">Днём: <span>{Math.floor(item.temp.day)}&#176;</span></div>
            <div className="night__temperature">Ночью: <span>{Math.floor(item.temp.night)}&#176;</span></div>
            <div className="cloudy">{item.weather[0].description}</div> 
        </div>
    )
};
