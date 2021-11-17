import React from 'react';
import { ThisDay } from '../../components/ThisDay';
import { ThisDayDetails } from '../../components/ThisDayDetails';

import './Home.css';

export function Home() {
    return (
        <div className="home-page">
            <ThisDay />
            <ThisDayDetails />
        </div>
    )
};
