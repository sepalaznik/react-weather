import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";

import './Header.css';
import AppContext from "../../context";

export function Header({}) {
    const { setCurrentCity } = React.useContext(AppContext);
    const [theme, setTheme] = useState(() => setStartTheme());

    function setStartTheme() {
        const startTheme = localStorage.getItem('theme');
        if (startTheme) {
            return JSON.parse(startTheme);
        } else {
            return 'light';
        }
    };

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const root = document.querySelector(':root');

        const changedStyles = [
            'body-background',
            'components-background',
            'card-background',
            'text-color',
            'components-shadow',
        ];

        changedStyles.forEach(style => {
            root.style.setProperty(`--${style}-default`, `var(--${style}-${theme})`);
        });

        localStorage.setItem('theme', JSON.stringify(theme));
        
    }, [theme]); 

    const options = [
        { value: 'Minsk,BY', label: 'Минск' },
        { value: 'Moscow,RU', label: 'Москва' },
        { value: 'Bratislava,SK', label: 'Братислава' },
        { value: 'Jerusalem,IL', label: 'Иерусалим' },
        { value: 'New York,NY,US', label: 'Нью-Йорк' },
    ];
    
    const selectStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme === 'light' ? '#cfe1fc' : '#4F4F4F',
            width: '208px',
            padding: '8px 2px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
        }),

        singleValue: (styles) => ({
            ...styles,
            color: theme === 'light' ? '#000000' : '#ffffff',
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: theme === 'light' ? '#ffffff' : '#bebebe',
            color: '#181818',
        }),
    };

    const handleSelectCity = (selectedOption) => {
        setCurrentCity(selectedOption.label);
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="wrapper">
                    <div className="logo">
                        <img src="assets/images/logo_weather_2.svg" alt="App Logo" title ="На главную страницу" />
                    </div>
                    <div className="title">React Weather</div>
                </div>
            </Link>
            <div className="wrapper">
                <Link to="/about">
                    <div className="icon about-me">
                        <img src="assets/images/icon_snowflake.svg" alt="About Me" title ="О приложении" />
                    </div>
                </Link>
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
