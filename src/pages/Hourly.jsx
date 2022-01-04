import React from "react";

import './NextDays.css';
import { CardHourly } from '../components/NextDays/CardHourly';
import AppContext from "../context";

export function Hourly() {
    const { longForecastData, isLoadingLong, currentCityName, currentCountry } = React.useContext(AppContext);

    let hourlyForecastData = longForecastData.hourly_forecast;

    return ( 
        <div>
            { isLoadingLong
                ? '' 
                : <div className="forecast__duration">
                    <div className="current__city_title">
                        <span>{currentCityName}</span>
                        <img src={`assets/flags/${currentCountry}.svg`} width={36} height={36} alt="" title ="" />
                    </div>
                    {hourlyForecastData.map((item) => (
                        <CardHourly {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
