import React from "react";

import './NextDays.css';
import { CardDaily } from '../components/NextDays/CardDaily';
import AppContext from "../context";

export function Daily() {
    const { longForecastData, isLoadingLong, currentCityName, currentCountry } = React.useContext(AppContext);

    let dailyForecastData = longForecastData.daily_forecast;

    return ( 
        <div>
            { isLoadingLong
                ? '' 
                : <div className="forecast__duration">
                    <div className="current__city_title">
                        <img src={`assets/flags/${currentCountry}.svg`} width={18} height={18} alt="" title ="" />
                        <span>{currentCityName}</span>
                    </div>
                    {dailyForecastData.map((item) => (
                        <CardDaily {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
