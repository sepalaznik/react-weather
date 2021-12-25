import React from "react";

import './NextDays.css';
import { CardHourly } from '../components/NextDays/CardHourly';
import AppContext from "../context";

export function Hourly() {
    const { longForecastData, isLoadingLong } = React.useContext(AppContext);

    let hourlyForecastData = longForecastData.hourly_forecast;

    return ( 
        <div>
            { isLoadingLong
                ? '' 
                : <div className="forecast__duration">    
                    {hourlyForecastData.map((item) => (
                        <CardHourly {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
