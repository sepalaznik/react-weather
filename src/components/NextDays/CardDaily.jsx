import React from "react";

import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { GetNextDate, GetNextWeekDay } from "./DatesList/datesList";
import AppContext from "../../context";

export function CardDaily(item) {
    const { longForecastData } = React.useContext(AppContext);

    const firstSymbolUC = (text) => {
        if (!text) return text;
        return text[0].toUpperCase() + text.slice(1);
    }

    return (
        <div className="weather__card">
            <div className="day__name">
                <span className="day__title"><GetNextWeekDay dt={item.dt} timezone={longForecastData.timezone} />, </span>
                <span className="day__date"><GetNextDate dt={item.dt} timezone={longForecastData.timezone} /></span>
            </div>
            <div className="daily__forecast">
                <div className="day__weather_logo">
                    <WeatherSvgSelector id={item.weather[0].icon} />
                </div>
                <div className="day__weather">
                    <div className="day__temperature">Днём: <span>{Math.floor(item.temp.day)}&#176;</span></div>
                    <div className="night__temperature">Ночью: <span>{Math.floor(item.temp.night)}&#176;</span></div>
                    <div className="cloudy__description">{firstSymbolUC(item.weather[0].description)}</div> 
                </div>
            </div>
        </div>
    )
};
