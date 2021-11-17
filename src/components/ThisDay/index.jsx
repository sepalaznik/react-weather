import React from "react";

import './ThisDay.css';
import { WeatherSvgSelector } from '../WeatherSvgSelector';

export function ThisDay() {
    return (
        <div className="this__day">
            <div className="top__block">    
                <div className="current__temperature">20&#176;</div>
                <div className="weather__logo">
                    <WeatherSvgSelector id="cloudy" />
                </div>
            </div>
            <div className="bottom__block">
                <div className="this__day_title">Сегодня: <span>18 ноя</span></div>
                <div className="current__time">Время: <span>12:05</span></div>
                <div className="current__city">Город: <span>Минск</span></div>
            </div>
        </div>
    )
};
