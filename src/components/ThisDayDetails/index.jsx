import React from "react";

import "./ThisDayDetails.css";
import { IndicatorSvgSelector } from "../ImgSelectors/IndicatorSvgSelector";
import { WeatherSvgSelector } from "../ImgSelectors/WeatherSvgSelector";
import { GetCurrentDate } from "./CurrentDayName/currentDayName.js";
import { Clock } from "./Clock/clock.js";
import AppContext from "../../context";

export function ThisDayDetails() {
    const { forecastData, currentCountry, currentCityName, isloading } = React.useContext(AppContext);

    let windDirectionRu = "нет информации о направлении";
    if (forecastData.wind_direction >=0 && forecastData.wind_direction < 22.5) {
        windDirectionRu = "северный";
    }
    if (forecastData.wind_direction >= 22.5 && forecastData.wind_direction < 67.5) {
        windDirectionRu = "северо-восточный";
    }
    if (forecastData.wind_direction >= 67.5 && forecastData.wind_direction < 112.5) {
        windDirectionRu = "восточный";
    }
    if (forecastData.wind_direction >= 112.5 && forecastData.wind_direction < 157.5) {
        windDirectionRu = "юго-восточный";
        }
    if (forecastData.wind_direction >= 157.5 && forecastData.wind_direction < 202.5) {
        windDirectionRu = "южный";
    }
    if (forecastData.wind_direction >= 202.5 && forecastData.wind_direction < 247.5) {
        windDirectionRu = "юго-западный";
    }
    if (forecastData.wind_direction >= 247.5 && forecastData.wind_direction < 292.5) {
        windDirectionRu = "западный";
    }
    if (forecastData.wind_direction >= 292.5 && forecastData.wind_direction < 337.5) {
        windDirectionRu = "северо-западный";
    }
    if (forecastData.wind_direction >= 337.5 && forecastData.wind_direction <= 360) {
        windDirectionRu = "северный";
    };

    const items = [
        {
            id: "temperature",
            name: "Температура",
            value: `${forecastData.temperature}°, ощущается как ${forecastData.feels_like}°`,
        },
        {
            id: "pressure",
            name: "Давление",
            value: `${forecastData.pressure} мм ртутного столба`,
        },
        {
            id: "cloudy",
            name: "Погода",
            value: `${forecastData.condition}`
        },
        {
            id: "precipitation",
            name: "Влажность",
            value: `${forecastData.humidity} %`,
        },
        {
            id: "wind",
            name: "Ветер",
            value: `${windDirectionRu}, ${forecastData.wind_speed} м/с`,
        },
    ];

    return (
        <div className="this__day_details">
            { isloading 
                ? ""
                : <div className="this__day_items">
                    <div className="current__city">
                        <span>{currentCityName}</span>
                        <img src={`assets/flags/${currentCountry}.svg`} width={36} height={36} alt="" title ="" />
                    </div>
                    <div className="top__block">
                        <div className="current__temperature">{forecastData.temperature}&#176;</div>
                        <div className="weather__logo">
                            <WeatherSvgSelector id={forecastData.icon} />
                        </div>
                    </div>
                    <div className="bottom__block">
                        <div className="this__day_title">Сегодня: <span><GetCurrentDate timezone={forecastData.timezone} /></span></div>
                        <div className="current__time">Сейчас: <span><Clock timezone={forecastData.timezone} /></span></div>
                    </div>
                    <hr />
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
            }
        </div>
    )
};
