import React from "react";

import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { GetNextDate, GetNextTime } from "./DatesList/datesList";
import AppContext from "../../context";

export function CardHourly(item) {
    const { longForecastData } = React.useContext(AppContext);

    const firstSymbolUC = (str) => {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div className="weather__card">
            <div className="hour__name">
                <span className="day__date"><GetNextDate dt={item.dt} timezone={longForecastData.timezone} />, </span>
                <span className="day__title"><GetNextTime dt={item.dt} timezone={longForecastData.timezone} /></span>
            </div>
            <div className="hourly__forecast">
                <div className="hour__weather_logo">
                    <WeatherSvgSelector id={item.weather[0].icon} />
                </div>
                <div className="hour__weather">
                    <div className="hour__temperature">Температура: <span>{Math.floor(item.temp)}&#176;</span></div>
                    <div className="hour__wind">Ветер: <span>{item.wind_speed.toFixed(1)} м/с</span></div>
                    <div className="hour__description">{firstSymbolUC(item.weather[0].description)}</div>
                </div>
            </div>

        </div>
    )
};
