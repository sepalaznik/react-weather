import React from "react";

import './NextDays.css';
import { CardDaily } from '../components/NextDays/CardDaily';
import AppContext from "../context";

export function Daily() {
    const { longForecastData, isLoadingLong } = React.useContext(AppContext);

    let dailyForecastData = longForecastData.daily_forecast;

    return ( 
        <div>
            { isLoadingLong
                ? '' 
                : <div className="forecast__duration">    
                    {dailyForecastData.map((item) => (
                        <CardDaily {...item} key={item.dt} />
                    ))}
                </div>
            }
        </div>
    );
};
