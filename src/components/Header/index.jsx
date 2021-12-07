import React, { useState, useEffect } from "react";
import Select from "react-select";

import "./Header.css";
import AppContext from "../../context";

export function Header({}) {
    const { setCurrentCity, setCityCoordinates } = React.useContext(AppContext);
    const [theme, setTheme] = useState(() => setStartTheme());

    function setStartTheme() {
        const startTheme = localStorage.getItem("theme");
        if (startTheme) {
            return JSON.parse(startTheme);
        } else {
            return "light";
        }
    };

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

        localStorage.setItem("theme", JSON.stringify(theme));
        
    }, [theme]); 

    const options = [
        { value: "lat=53.9&lon=27.5667", label: "Минск" },
        { value: "lat=55.7522&lon=37.6156", label: "Москва" },
        { value: "lat=48.1482&lon=17.1067", label: "Братислава" },
        { value: "lat=31.769&lon=35.2163", label: "Иерусалим" },
        { value: "lat=40.7143&lon=-74.006", label: "Нью-Йорк" },
    ];
    
    const selectStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme === "light" ? "#cfe1fc" : "#4F4F4F",
            width: "208px",
            padding: "8px 2px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
        }),

        singleValue: (styles) => ({
            ...styles,
            color: theme === "light" ? "#000000" : "#ffffff",
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: theme === "light" ? "#ffffff" : "#bebebe",
            color: "#181818",
        }),
    };

    const handleSelectCity = (selectedOption) => {
        setCurrentCity(selectedOption.label);
        setCityCoordinates(selectedOption.value);
    }

    return (
        <div className="header">
            <div className="wrapper">
                <div className="logo">
                    <img src="assets/images/logo_weather_2.svg" alt="App Logo" title ="App Logo" />
                </div>
                <div className="title">React Weather</div>
            </div>
            <div className="wrapper">
                <div className="icon change-theme" onClick={changeTheme}>
                    <img src="assets/images/icon_raindrop.svg" alt="Change Theme" title ="Изменить тему" />
                </div>
                <Select 
                    onChange={handleSelectCity}
                    options={options}
                    styles={selectStyles} 
                    defaultValue={options[0]} 
                    placeholder="Выберите город" 
                />
            </div>
        </div>
    )
};
