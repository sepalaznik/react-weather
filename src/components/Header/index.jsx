import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header({}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?
    localStorage.getItem("theme") : "light");

    function changeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        const root = document.querySelector(":root");

        const changedStyles = [
            "body-background",
            "components-background",
            "card-background",
            "text-color",
            "components-shadow",
        ];

        changedStyles.forEach(style => {
            root.style.setProperty(`--${style}-default`, `var(--${style}-${theme})`);
        });
        localStorage.setItem("theme", theme);
    }, [theme]); 

    return (
        <div className="header">
            <Link to="/">
                <div className="wrapper">
                    <div className="logo">
                        <img src="assets/images/logo_weather_2.svg" alt="App Logo" title ="React Weather App" />
                    </div>
                    <div className="title">React Weather</div>
                </div>
            </Link>
            <div className="wrapper">
                <Link to="/about">
                    <div className="icon about-app">
                        <img src="assets/images/icon_snowflake.svg" alt="About App" title ="О приложении" />
                    </div>
                </Link>
                <div className="icon change-theme" onClick={changeTheme}>
                    <img src="assets/images/icon_raindrop.svg" alt="Change Theme" title ="Изменить тему" />
                </div>
            </div>
        </div>
    )
};
