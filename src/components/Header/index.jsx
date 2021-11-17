import React from "react";
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
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '208px',
            padding: '8px 2px',
            border: 'none',
            borderRadius: '12px'
        }),
    };

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
                    <div className="logo">
                        <img src="assets/images/raindrop.svg" alt="About Us" />
                    </div>
                </Link>
                <Select options={options} styles={selectStyles} placeholder="Выберите город" />
            </div>
        </div>
    )
};
