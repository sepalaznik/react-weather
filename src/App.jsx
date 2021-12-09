import React from 'react';
import { Route, Switch } from 'react-router';
import axios from 'axios';

import AppContext from "./context";
import { Header } from './components/Header';
import { ThisDay } from './components/ThisDay';
import { ThisDayDetails } from './components/ThisDayDetails';
import { Tabs } from './components/NextDays/Tabs';
import { Hourly } from './components/NextDays/Hourly';
import { Daily } from './components/NextDays/Daily';
import { About } from './components/About';

function App() {
    const [forecastData, setForecastData] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentCity, setCurrentCity] = React.useState("Минск");
    const [cityCoordinates, setCityCoordinates] = React.useState("lat=53.9&lon=27.5667");

    React.useEffect(() => {
        async function getOpenWeatherData(coordinates) {
            const URL = "https://api.openweathermap.org/data/2.5/onecall";
            const API_KEY = "317d8d98230306f1440ac5140bd1461a";

            try {
                await axios.get(`${URL}?${coordinates}&appid=${API_KEY}&exclude=minutely,alerts&units=metric&lang=ru`)
                    .then((response) => response.data)
                    .then((data) => {
                        const openWeatherData = {
                            timezone: data.timezone,
                            temperature: data.current.temp.toFixed(),
                            feels_like: data.current.feels_like.toFixed(),
                            pressure: (data.current.pressure / 1.33).toFixed(),
                            humidity: data.current.humidity,
                            condition: data.current.weather[0].description,
                            icon: data.current.weather[0].icon,
                            wind_speed: data.current.wind_speed.toFixed(1),
                            wind_direction: data.current.wind_deg,
                            hourly_forecast: data.hourly.slice(0, 12),
                            daily_forecast: data.daily.slice(1, 8),
                        }
                        setForecastData(openWeatherData);
                        setIsLoading(false);
                    })
            } catch (error) {
                alert("Ошибка загрузки данных с сервера");
            }
        };
        getOpenWeatherData(cityCoordinates);
    }, [cityCoordinates]);

    return (
        <AppContext.Provider value={{ 
            currentCity,
            setCurrentCity,
            setCityCoordinates,
            forecastData,
            isLoading
        }}>
            <div className="container">
                <Header />
                <div className="main-page">
                    <div className="this-day-forecast">
                        <ThisDay />
                        <ThisDayDetails />
                    </div>
                    <div className="next-days-forecast">
                        <Tabs />
                        <Switch>
                            <Route path="/hourly" exact>
                                <Hourly />
                            </Route>
                            <Route path="/daily" exact>
                                <Daily />
                            </Route>
                            <Route path="/" exact>
                                <About />
                            </Route>
                        </Switch>
                    </div>     
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
