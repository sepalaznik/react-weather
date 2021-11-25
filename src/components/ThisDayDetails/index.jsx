import React from "react";

import './ThisDayDetails.css';
import { IndicatorSvgSelector } from '../IndicatorSvgSelector';
import AppContext from "../../context";

export function ThisDayDetails() {
    const { forecastData } = React.useContext(AppContext);

    const cloudyDescription = (props) => {
        switch (props.cloudy) {
            case 'clear sky':
                return "Ясно";
            case 'few clouds':
                return "Небольшая обласность с прояснениями";
            case 'scattered clouds':
                return "Облачно";
            case 'broken clouds':
            case 'overcast clouds':
                return "Сплошная облачность";
            case 'shower rain':
                return "Сильный дождь";
            case 'rain':
                return "Небольшой дождь";
            case 'thunderstorm':
                return "Гроза";
            case 'snow':
                return "Снег";
            case 'mist':
                return "Туман";
            default:
                return null;
        }
    };

    const items = [
        {
            id: 'temperature',
            name: 'Температура',
            value: `${forecastData.temperature}°, ощущается как ${forecastData.feels_like}°`,
        },
        {
            id: 'pressure',
            name: 'Давление',
            value: `${forecastData.pressure} мм ртутного столба`,
        },
        {
            id: 'cloudy',
            name: 'Погода',
            value: cloudyDescription(forecastData),
        },
        {
            id: 'precipitation',
            name: 'Влажность',
            value: `${forecastData.humidity} %`,
        },
        {
            id: 'wind',
            name: 'Ветер',
            value: `${forecastData.wind_speed} м/с, направление: ${forecastData.wind_direction}°`,
        },
    ];

    return (
        <div className="this__day_details">
            <div className="this__day_items">
                {forecastData && items.map((item) => (
                    <div className="day__details_item" key={item.id}>
                        <div className="day__details_indicator">
                            <IndicatorSvgSelector id={item.id} />
                        </div>
                        <div className="indicator__name">{item.name}:</div>
                        <div className="indicator__value">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};
