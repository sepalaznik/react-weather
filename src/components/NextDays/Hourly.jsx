import React from "react";

import './NextDays.css';
import { CardHourly } from './CardHourly';
import AppContext from "../../context";

export function Hourly() {
    const { isloading, forecastData } = React.useContext(AppContext);

    const hours1 = forecastData.hourly_forecast;

    const hours = [
        {
            "dt": 1638957600,
            "temp": -11.84,
            "feels_like": -18.84,
            "pressure": 1021,
            "humidity": 85,
            "dew_point": -13.63,
            "uvi": 0.47,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 4.9,
            "wind_deg": 60,
            "wind_gust": 11.89,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638961200,
            "temp": -12.14,
            "feels_like": -19.14,
            "pressure": 1021,
            "humidity": 86,
            "dew_point": -13.8,
            "uvi": 0.42,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 4.79,
            "wind_deg": 51,
            "wind_gust": 11.87,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638964800,
            "temp": -11.72,
            "feels_like": -18.72,
            "pressure": 1021,
            "humidity": 85,
            "dew_point": -13.51,
            "uvi": 0.27,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 5.04,
            "wind_deg": 40,
            "wind_gust": 11.98,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638968400,
            "temp": -11.41,
            "feels_like": -18.41,
            "pressure": 1021,
            "humidity": 85,
            "dew_point": -13.21,
            "uvi": 0,
            "clouds": 59,
            "visibility": 10000,
            "wind_speed": 5.15,
            "wind_deg": 44,
            "wind_gust": 12.6,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638972000,
            "temp": -11.34,
            "feels_like": -18.34,
            "pressure": 1020,
            "humidity": 85,
            "dew_point": -13.14,
            "uvi": 0,
            "clouds": 62,
            "visibility": 10000,
            "wind_speed": 5.21,
            "wind_deg": 53,
            "wind_gust": 13.16,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638975600,
            "temp": -11.26,
            "feels_like": -18.26,
            "pressure": 1020,
            "humidity": 86,
            "dew_point": -12.93,
            "uvi": 0,
            "clouds": 63,
            "visibility": 10000,
            "wind_speed": 5.33,
            "wind_deg": 53,
            "wind_gust": 13.71,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1638979200,
            "temp": -11.24,
            "feels_like": -18.24,
            "pressure": 1020,
            "humidity": 86,
            "dew_point": -13.95,
            "uvi": 0,
            "clouds": 65,
            "visibility": 10000,
            "wind_speed": 5.6,
            "wind_deg": 55,
            "wind_gust": 14.21,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04n"
                }
            ],
            "pop": 0
        }
    ];

    console.log(hours1);

    return ( 
        <div>
            { isloading 
                ? '' 
                : <div className="forecast__duration">    
                    {hours.map((item) => (
                        <CardHourly {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
