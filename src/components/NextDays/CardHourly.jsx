import React from "react";

import './NextDays.css';
import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { GetNextDate, GetNextTime } from "./DatesList/datesList";
import AppContext from "../../context";

export function CardHourly(item) {
    const { forecastData } = React.useContext(AppContext);

    const firstSymbolUC = (str) => {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div className="weather__card">
            <div className="day__title"><GetNextTime dt={item.dt} timezone={forecastData.timezone} /></div>
            <div className="day__date"><GetNextDate dt={item.dt} timezone={forecastData.timezone} /></div>
            <div className="day__weather_logo">
                <WeatherSvgSelector id={item.weather[0].icon} />
            </div>
            <div className="day__temperature">Температура: <span>{Math.floor(item.temp)}&#176;</span></div>
            <div className="night__temperature">Ветер: <span>{item.wind_speed.toFixed(1)} м/с</span></div>
            <div className="cloudy">{firstSymbolUC(item.weather[0].description)}</div> 
        </div>
    )
};
