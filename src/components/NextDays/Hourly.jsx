import React from "react";

import './NextDays.css';
import { CardHourly } from './CardHourly';
import AppContext from "../../context";

export function Hourly() {
    const { isloading, forecastData } = React.useContext(AppContext);

    const hours = forecastData.hourly_forecast;

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
