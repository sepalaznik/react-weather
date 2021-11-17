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
            backgroundColor: '#cfe1fc',
            width: '208px',
            padding: '8px 2px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            zIndex: '100',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: '#000',
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
                        <img src="assets/images/logo_weather_2.svg" alt="App Logo" />
                    </div>
                </Link>
                    <div className="title">React Weather</div>
            </div>
            <div className="wrapper">
                <Link to="/about">
                    <div className="icon about_me">
                        <img src="assets/images/icon_snowflake.svg" alt="About Me" />
                    </div>
                </Link>
                <div className="icon" onClick={changeTheme}>
                    <img src="assets/images/icon_raindrop.svg" alt="Change Theme" />
                </div>
                <Select options={options} styles={selectStyles} placeholder="Выберите город" />
            </div>
        </div>
    )
};
