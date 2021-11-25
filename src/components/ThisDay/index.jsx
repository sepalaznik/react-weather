import React from "react";

import './ThisDay.css';
import { WeatherSvgSelector } from '../WeatherSvgSelector';
import { Clock } from "../../model/clock";
import { DatesList } from "../../model/datesList";
import AppContext from "../../context";

export function ThisDay() {
    const { currentCity, forecastData } = React.useContext(AppContext);
    return (
        <div className="this__day">
            <div className="top__block">    
                <div className="current__temperature">{forecastData.temperature}&#176;</div>
                <div className="weather__logo">
                    <WeatherSvgSelector id={forecastData.icon} />
                </div>
            </div>
            <div className="bottom__block">
                <div className="this__day_title">Сегодня: <span><DatesList/></span></div>
                <div className="current__time">Время: <span><Clock/></span></div>
                <div className="current__city">Город: <span>{currentCity}</span></div>
            </div>
        </div>
    )
};
