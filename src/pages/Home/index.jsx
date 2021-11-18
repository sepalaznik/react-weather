import React from 'react';

import './Home.css';
import { ThisDay } from '../../components/ThisDay';
import { ThisDayDetails } from '../../components/ThisDayDetails';
import { NextDays } from '../../components/NextDays';

export function Home() {
    return (
        <div className="home-page">
            <div className="this-day-forecast">
                <ThisDay />
                <ThisDayDetails />
            </div>
            <NextDays />
        </div>
    )
};
