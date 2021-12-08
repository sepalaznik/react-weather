import React from "react";

import './NextDays.css';
import { CardDaily } from './CardDaily';
import AppContext from "../../context";

export function Daily() {
    const { isloading, forecastData } = React.useContext(AppContext);

    const days1 = forecastData.daily_forecast;
    
    const days = [
        {
            "dt": 1639044000,
            "sunrise": 1639030551,
            "sunset": 1639057716,
            "moonrise": 1639046700,
            "moonset": 1639079520,
            "moon_phase": 0.19,
            "temp": {
                "day": -7.87,
                "min": -11.56,
                "max": -4.28,
                "night": -4.28,
                "eve": -5.59,
                "morn": -11.25
            },
            "feels_like": {
                "day": -14.77,
                "night": -10.51,
                "eve": -12.21,
                "morn": -18.25
            },
            "pressure": 1021,
            "humidity": 89,
            "dew_point": -9.8,
            "wind_speed": 5.99,
            "wind_deg": 87,
            "wind_gust": 13.66,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "облачно с прояснениями",
                    "icon": "04d"
                }
            ],
            "clouds": 61,
            "pop": 0.03,
            "uvi": 0.47
        },
        {
            "dt": 1639130400,
            "sunrise": 1639117021,
            "sunset": 1639144100,
            "moonrise": 1639134060,
            "moonset": 0,
            "moon_phase": 0.23,
            "temp": {
                "day": 0.62,
                "min": -4.05,
                "max": 2.47,
                "night": 2.47,
                "eve": 1.81,
                "morn": -1.57
            },
            "feels_like": {
                "day": -5.3,
                "night": -3.43,
                "eve": -4.31,
                "morn": -7.53
            },
            "pressure": 1016,
            "humidity": 98,
            "dew_point": 0.27,
            "wind_speed": 9.09,
            "wind_deg": 116,
            "wind_gust": 19.43,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "снег с дождём",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 0.58,
            "rain": 0.36,
            "snow": 0.37,
            "uvi": 0.12
        },
        {
            "dt": 1639216800,
            "sunrise": 1639203487,
            "sunset": 1639230487,
            "moonrise": 1639221180,
            "moonset": 1639170840,
            "moon_phase": 0.25,
            "temp": {
                "day": 3.25,
                "min": 1.48,
                "max": 3.5,
                "night": 1.48,
                "eve": 2.09,
                "morn": 3.5
            },
            "feels_like": {
                "day": -0.96,
                "night": 0.09,
                "eve": -1.74,
                "morn": -1.17
            },
            "pressure": 1014,
            "humidity": 99,
            "dew_point": 3.01,
            "wind_speed": 9.04,
            "wind_deg": 118,
            "wind_gust": 19.19,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "дождь",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 20.18,
            "uvi": 0.09
        },
        {
            "dt": 1639303200,
            "sunrise": 1639289950,
            "sunset": 1639316878,
            "moonrise": 1639308240,
            "moonset": 1639261920,
            "moon_phase": 0.29,
            "temp": {
                "day": 0.18,
                "min": -0.12,
                "max": 2.08,
                "night": 2.01,
                "eve": 2.08,
                "morn": 0.41
            },
            "feels_like": {
                "day": -3.73,
                "night": -2.06,
                "eve": -1.04,
                "morn": 0.41
            },
            "pressure": 1024,
            "humidity": 99,
            "dew_point": 0.03,
            "wind_speed": 4.93,
            "wind_deg": 243,
            "wind_gust": 10.3,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "снег с дождём",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 18.48,
            "snow": 1.06,
            "uvi": 0.03
        },
        {
            "dt": 1639389600,
            "sunrise": 1639376411,
            "sunset": 1639403272,
            "moonrise": 1639395240,
            "moonset": 1639352820,
            "moon_phase": 0.32,
            "temp": {
                "day": 0.35,
                "min": -0.5,
                "max": 1.49,
                "night": -0.5,
                "eve": -0.17,
                "morn": 0.84
            },
            "feels_like": {
                "day": -3.72,
                "night": -3.64,
                "eve": -3.99,
                "morn": -3.24
            },
            "pressure": 1018,
            "humidity": 95,
            "dew_point": -0.32,
            "wind_speed": 4.47,
            "wind_deg": 110,
            "wind_gust": 10.18,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "снег с дождём",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 4.87,
            "snow": 1.99,
            "uvi": 1
        },
        {
            "dt": 1639476000,
            "sunrise": 1639462868,
            "sunset": 1639489671,
            "moonrise": 1639482300,
            "moonset": 1639443600,
            "moon_phase": 0.35,
            "temp": {
                "day": -0.89,
                "min": -2.02,
                "max": -0.48,
                "night": -1.62,
                "eve": -1.12,
                "morn": -0.83
            },
            "feels_like": {
                "day": -3.37,
                "night": -3.69,
                "eve": -3.84,
                "morn": -3.4
            },
            "pressure": 1021,
            "humidity": 95,
            "dew_point": -1.62,
            "wind_speed": 2.35,
            "wind_deg": 40,
            "wind_gust": 4.65,
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "снег",
                    "icon": "13d"
                }
            ],
            "clouds": 97,
            "pop": 0.91,
            "snow": 4.35,
            "uvi": 1
        },
        {
            "dt": 1639562400,
            "sunrise": 1639549321,
            "sunset": 1639576073,
            "moonrise": 1639569480,
            "moonset": 1639534380,
            "moon_phase": 0.38,
            "temp": {
                "day": 0.15,
                "min": -3.2,
                "max": 0.15,
                "night": -0.15,
                "eve": -0.59,
                "morn": -0.5
            },
            "feels_like": {
                "day": -2.77,
                "night": -3.07,
                "eve": -3.53,
                "morn": -2.54
            },
            "pressure": 1023,
            "humidity": 97,
            "dew_point": -0.36,
            "wind_speed": 2.43,
            "wind_deg": 264,
            "wind_gust": 5.82,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ],
            "clouds": 95,
            "pop": 0,
            "uvi": 1
        }
    ];

    console.log(days1);

    return ( 
        <div>
            { isloading 
                ? '' 
                : <div className="forecast__duration">    
                    {days.map((item) => (
                        <CardDaily {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
