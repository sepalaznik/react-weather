import React from "react";
import { Link } from "react-router-dom";

import './NextDays.css';

export function Tabs() {
    // const tabActive = () => {
    //     const tab = document.querySelectorAll(".tab");
    //     tab.classList.add("active");
    // }    

    return (
        <div className="tabs__block">
            <div className="select__tabs">
                <Link to="/hourly">
                    <div className="tab active">Почасовой</div>
                </Link>
                <Link to="/daily">
                    <div className="tab">На неделю</div>
                </Link>                
            </div>

            <div className="about">
                <Link to="/about">
                    <div className="icon about-me">
                        <img src="assets/images/icon_snowflake.svg" alt="About Me" title ="О приложении" />
                    </div>
                </Link>
            </div>
        </div>
    )
};
