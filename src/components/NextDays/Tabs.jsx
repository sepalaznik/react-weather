import React, {useState} from "react";
import { Link } from "react-router-dom";

import './NextDays.css';

export function Tabs() {
    const handleSelectActiveTab = (e) => {
        let selectors = document.querySelectorAll(".selector");
    
        for (let i = 0; i < selectors.length; i++) {
          selectors[i].classList.remove("active");
        }

        e.currentTarget.classList.add("active");
    };
    
    return (
        <div className="tabs__block">
            <div className="select__tabs">
                <Link to="/hourly">
                    <div className="tab selector" onClick={handleSelectActiveTab}>Почасовой</div>
                </Link>
                <Link to="/daily">
                    <div className="tab selector" onClick={handleSelectActiveTab}>На неделю</div>
                </Link>                
            </div>
            <Link to="/">
                <div className="selector about-me active" onClick={handleSelectActiveTab} title ="О приложении">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.2" height="28"
                        viewBox="0 0 25.2 28">
                        <path d="M24,18.6L23,18l0.7-0.4c1.9-1.1,0.2-4-1.7-3L20,15.7c-0.2,0.1-0.3,0.2-0.5,0.3l-0.7-0.4v-3.3l0.7-0.4
                            c0.2,0.1,0.3,0.2,0.5,0.3l1.9,1.1c1.9,1.1,3.6-1.8,1.7-3L23,9.9l0.7-0.4l0.4-0.2c1.5-0.9,0.7-3-0.6-3.1c-0.1,0-0.2,0-0.3,0
                            c-0.2,0-0.5,0.1-0.7,0.2L21.3,7c0-0.3,0-0.5,0-0.8c0-0.1,0-0.1,0-0.2c-0.1-1.8-2.7-2-3.3-0.5c-0.1,0.2-0.1,0.5-0.1,0.7v2.2
                            c0,0.2,0,0.3,0,0.5l0,0L17,9.5l-1.4-0.8c-0.2-0.1-0.5-0.3-0.8-0.5c-0.1-0.1-0.3-0.2-0.5-0.3V7c0.2-0.1,0.3-0.2,0.5-0.3l2-1.1
                            c0.1-0.1,0.2-0.2,0.3-0.2c1.3-1.2-0.3-3.7-2-2.7l-0.7,0.4V1.9c0-2.2-3.4-2.2-3.4,0v1.2l-0.7-0.4C8.7,1.8,7.2,3.8,8,5.1
                            c0.2,0.2,0.3,0.4,0.6,0.5l1.9,1.1C10.7,6.9,10.9,6.9,11,7v1c-0.4,0.2-0.8,0.5-1.1,0.7L8.4,9.6L7.5,9c0-0.2,0-0.4,0-0.6V6.2
                            c0-2.2-3.4-2.2-3.4,0c0,0.3,0,0.5,0,0.8L3,6.5C1.1,5.4-0.6,8.3,1.3,9.4L2.4,10l-0.7,0.4c-1.9,1.1-0.2,4,1.7,3l1.9-1.1
                            c0.2-0.1,0.3-0.2,0.5-0.3l0.7,0.4v3.2L5.7,16c-0.2-0.1-0.3-0.2-0.5-0.3l-1.9-1.1c-1.9-1.1-3.6,1.8-1.7,3L2.4,18l-1,0.6
                            c-1.9,1.1-0.2,4,1.7,3l1-0.6c0,0.3,0,0.5,0,0.8c0,2.2,3.4,2.2,3.4,0v-2.2c0-0.2,0-0.3,0-0.6l0.5-0.3l1.8,1c0.3,0.2,0.8,0.5,1.2,0.8
                            V21c-0.2,0.1-0.3,0.2-0.5,0.3l-1.9,1.1c-1.9,1.1-0.2,4,1.7,3L11,25v1.3c0,2.2,3.4,2.2,3.4,0V25l0.7,0.4c1.9,1.1,3.6-1.9,1.7-3
                            l-1.9-1.1c-0.2-0.1-0.3-0.2-0.5-0.3v-0.5c0.4-0.2,0.8-0.5,1.2-0.8l1.9-1l0.5,0.3c0,0.2,0,0.4,0,0.6v2.2c0,2.2,3.4,2.2,3.4,0
                            c0-0.3,0-0.5,0-0.8l1,0.6C24.2,22.6,25.9,19.7,24,18.6z M12.7,17.5L12.7,17.5l-1.3-0.8L11,16.5l-1.1-0.6v-3.3l0.2-0.1l0.9-0.5
                            l0.8-0.5l0.9-0.5l0,0l0.9,0.5l0.8,0.4l0.9,0.5l0.2,0.1v3.3l-1.1,0.6l-0.4,0.2L12.7,17.5z"
                            fill="#32A6DE"/>
                    </svg>
                </div>
            </Link>
        </div>
    )
};
