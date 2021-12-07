import React from "react";

import './ThisDay.css';
import { WeatherSvgSelector } from '../ImgSelectors/WeatherSvgSelector';
import { Clock } from "./Clock/clock.js";
import { GetCurrentDate } from "./CurrentDayName/currentDayName.js";
import AppContext from "../../context";

export function ThisDay() {
    const { currentCity, forecastData, isloading } = React.useContext(AppContext);
    
    return (
        <div>
            { isloading 
                ? ''
                : <div className="this__day">
                    <div className="top__block">    
                        <div className="current__temperature">{forecastData.temperature}&#176;</div>
                        <div className="weather__logo">
                            <WeatherSvgSelector id={forecastData.icon} />
                        </div>
                    </div>
                    <div className="bottom__block">
                        <div className="this__day_title">Сегодня: <span><GetCurrentDate/></span></div>
                        <div className="current__time">Текущее время: <span><Clock timezone={forecastData.timezone} /></span></div>
                        <div className="current__city">Город: <span>{currentCity}</span></div>
                    </div>
                </div>
            }
        </div>
    )
};
