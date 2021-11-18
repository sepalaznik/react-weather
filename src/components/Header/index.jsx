import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";

import './Header.css';

export function Header() {
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
        placeholder: (styles) => ({
            ...styles,
            color: theme === 'light' ? '#808080' : '#bbbbbb',
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

    const [theme, setTheme] = useState('light');

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
    }, [theme]);  

    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/">
                    <div className="logo">
                        <img src="assets/images/logo_weather_2.svg" alt="App Logo" title ="На главную страницу" />
                    </div>
                </Link>
                    <div className="title">React Weather</div>
            </div>
            <div className="wrapper">
                <Link to="/about">
                    <div className="icon about_me">
                        <img src="assets/images/icon_snowflake.svg" alt="About Me" title ="О приложении" />
                    </div>
                </Link>
                <div className="icon" onClick={changeTheme}>
                    <img src="assets/images/icon_raindrop.svg" alt="Change Theme" title ="Изменить тему" />
                </div>
                <Select options={options} styles={selectStyles} placeholder="Выберите город" />
            </div>
        </div>
    )
};
