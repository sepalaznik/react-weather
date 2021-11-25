import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";

import './Header.css';

export function Header({}) {
    const [theme, setTheme] = useState('light');
        
    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem(theme, JSON.stringify(theme));
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
    }, [theme]); 

    const options = [
        { value: 'minsk', label: 'Минск' },
        { value: 'moscow', label: 'Москва' },
        { value: 'bratislava', label: 'Братислава' },
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
                    options={options}
                    styles={selectStyles} 
                    defaultValue={options[0]} 
                    placeholder="Выберите город" 
                />
            </div>
        </div>
    )
};
