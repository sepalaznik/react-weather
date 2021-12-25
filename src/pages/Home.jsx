import React from "react";

import { ThisDayDetails } from "../components/ThisDayDetails";
import { SelectCities } from '../components/SelectCities';
import "./Home.css";

export const Home = () => {
    return (
        <div className="home-page">
            <ThisDayDetails />
            <SelectCities />
        </div>
    );
};