import React from "react";

import './NextDays.css';
import { Tabs } from './Tabs';
import { Card } from './Card';

import AppContext from "../../context";

export function NextDays() {
    const { isloading, forecastData } = React.useContext(AppContext);

    const days1 = forecastData.daily_forecast;

    function delay () {
        console.log(days1)
    };
    delay()

    
    const days = [
        {
            "dt": 1638633600,
            "temp": {
                "day": 3.05,
                "night": 4.49,
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1638720000,
            "temp": {
                "day": 6.32,
                "night": 11.64
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "дождь",
                    "icon": "10d"
                }
            ]
        },
        {
            "dt": 1638806400,
            "temp": {
                "day": 14.47,
                "night": 4.02
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "дождь",
                    "icon": "10d"
                }
            ]
        },
        {
            "dt": 1638892800,
            "temp": {
                "day": 2.86,
                "night": 4.28
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "пасмурно",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1638979200,
            "temp": {
                "day": 12.34,
                "night": 11.47
            },
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "сильный дождь",
                    "icon": "10d"
                }
            ]
        }
    ]

    return ( 
        <div>
            {isloading ? 'Данные загрузаются...' : (
            <div className="forecast__duration">    
                {days.map((item) => (
                    <Card {...item} key={item.dt} />
                ))}
            </div>
            )}
        </div>
    )
};
