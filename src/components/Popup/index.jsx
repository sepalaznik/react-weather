import React from "react";

import './Popup.css';
import { IndicatorSvgSelector } from '../IndicatorSvgSelector';
import { WeatherSvgSelector } from '../WeatherSvgSelector';

export function Popup() {
    const selectDay = [
        {
            id: 'temperature',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            id: 'cloudy',
            name: 'Облачность',
            value: 'Небольшие облака',
        },
        {
            id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];

    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__title">
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
                <div className="this__day_items">
                    {selectDay.map((item) => (
                        <div className="day__details_item" key={item.id}>
                            <div className="day__details_indicator">
                                <IndicatorSvgSelector id={item.id} />
                            </div>
                            <div className="indicator__name">{item.name}:</div>
                            <div className="indicator__value">{item.value}</div>
                        </div>
                    ))}
                </div>
                <div className="close_popup">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z"
                            fill="#4793FF"/>
                        <path d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7197C5.9269 11.0126 5.9269 11.4874 6.21978 11.7802C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7802L9.00003 10.0605L10.7198 11.7802C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7802C12.0731 11.4874 12.0731 11.0126 11.7803 10.7197L10.0605 9Z"
                            fill="#4793FF"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};
