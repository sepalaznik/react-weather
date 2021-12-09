import React from "react";

import './NextDays.css';
import { CardDaily } from './CardDaily';
import AppContext from "../../context";

export function Daily() {
    const { isloading, forecastData } = React.useContext(AppContext);

    const days = forecastData.daily_forecast;

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
