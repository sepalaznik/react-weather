import React from "react";

import './NextDays.css';
import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { GetNextDate, GetNextTime } from "./DatesList/datesList";

export function CardHourly(item) {
    return (
        <div className="weather__card">
            <div className="day__title"><GetNextTime dt={item.dt} /></div>
            <div className="day__date"><GetNextDate dt={item.dt} /></div>
            <div className="day__weather_logo">
                <WeatherSvgSelector id={item.weather[0].icon} />
            </div>
            <div className="day__temperature">Температура: <span>{Math.floor(item.temp)}&#176;</span></div>
            <div className="night__temperature">Ветер: <span>{Math.floor(item.wind_speed)} м/с</span></div>
            <div className="cloudy">{item.weather[0].description}</div> 
        </div>
    )
};
