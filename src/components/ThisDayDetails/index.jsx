import React from "react";

import './ThisDayDetails.css';
import { IndicatorSvgSelector } from '../IndicatorSvgSelector';

export function ThisDayDetails() {
    const items = [
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
        <div className="this__day_details">
            <div className="this__day_items">
                {items.map((item) => (
                    <div className="day__details_item" key={item.id}>
                        <div className="day__details_indicator">
                            <IndicatorSvgSelector id={item.id} />
                        </div>
                        <div className="indicator__name">{item.name}:</div>
                        <div className="indicator__value">{item.value}</div>
                    </div>
                ))}
            </div>
            <img src="assets/images/clouds.png" alt="clouds" />
        </div>
    )
};
