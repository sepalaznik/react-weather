import React from 'react';
import { Route, Switch } from 'react-router';
import axios from 'axios';

import AppContext from "./context";
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { Home } from './pages/Home';
import { Hourly } from './pages/Hourly';
import { Daily } from './pages/Daily';
import { About } from './pages/About';

function App() {
    const [forecastData, setForecastData] = React.useState({});
    const [longForecastData, setLongForecastData] = React.useState({});
    const [isLoadingLong, setIsLoadingLong] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentCity, setCurrentCity] = React.useState(sessionStorage.getItem("city") ? sessionStorage.getItem("city") : "Minsk");
    const [currentCityName, setCurrentCityName] = React.useState(sessionStorage.getItem("cityName") ? sessionStorage.getItem("cityName") : "Минск");
    const [currentCountry, setCurrentCountry] = React.useState(sessionStorage.getItem("country") ? sessionStorage.getItem("country") : "BY");
    const [cityCoordinates, setCityCoordinates] = React.useState(sessionStorage.getItem("coordinates") ? sessionStorage.getItem("coordinates") : "lat=53.9&lon=27.5667");

    React.useEffect(() => {
        async function getOpenWeatherData(city, country) {
            const URL = "https://api.openweathermap.org/data/2.5/weather";
            const API_KEY = "317d8d98230306f1440ac5140bd1461a";
            try {
                await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric&lang=ru`)
                    .then((response) => response.data)
                    .then((data) => {
                        const openWeatherData = {
                            timezone: (data.timezone * 1000),
                            temperature: data.main.temp.toFixed(),
                            feels_like: data.main.feels_like.toFixed(),
                            pressure: (data.main.pressure / 1.33).toFixed(),
                            humidity: data.main.humidity,
                            condition: data.weather[0].description,
                            icon: data.weather[0].icon,
                            wind_speed: data.wind.speed.toFixed(1),
                            wind_direction: data.wind.deg,
                        };
                        setForecastData(openWeatherData);
                        const cityData = {
                            lon: data.coord.lon,
                            lat: data.coord.lat,
                            country: data.sys.country,
                            name: data.name
                        };
                        setCurrentCountry(cityData.country);
                        sessionStorage.setItem("country", cityData.country);
                        setCurrentCityName(cityData.name);
                        sessionStorage.setItem("cityName", cityData.name);
                        setCityCoordinates(`lon=${cityData.lon}&lat=${cityData.lat}`);
                        sessionStorage.setItem("coordinates", `lon=${cityData.lon}&lat=${cityData.lat}`);
                        setIsLoading(false);
                    })
            } catch (error) {
                alert("Ошибка загрузки данных текущего прогноза с сервера");
            }};
            getOpenWeatherData(currentCity, currentCountry);

            async function getLongOpenWeatherData(cityCoordinates) {
                const URL_ONECALL = "https://api.openweathermap.org/data/2.5/onecall";
                const API_KEY = "317d8d98230306f1440ac5140bd1461a";
                try {
                    await axios.get(`${URL_ONECALL}?${cityCoordinates}&appid=${API_KEY}&exclude=minutely,alerts&units=metric&lang=ru`)
                        .then((response) => response.data)
                        .then((data) => {
                            const longOpenWeatherData = {
                                timezone: data.timezone,
                                hourly_forecast: data.hourly.slice(1, 9),
                                daily_forecast: data.daily.slice(1, 8),
                            };
                            setLongForecastData(longOpenWeatherData);
                            setIsLoadingLong(false);
                        })
                } catch (error) {
                    alert("Ошибка загрузки данных прогноза на неделю с сервера");
                }
            };
            getLongOpenWeatherData(cityCoordinates);

        }, [currentCity, currentCountry, cityCoordinates]);

        return (
        <AppContext.Provider value={{ 
            currentCityName,
            currentCountry,
            cityCoordinates,
            setCurrentCity,
            setCurrentCityName,
            setCurrentCountry,
            setCityCoordinates,
            forecastData,
            longForecastData,
            isLoading,
            isLoadingLong
        }}>
            <div className="container">
                <Header />
                <Tabs />
                <div className="content-page">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/hourly" exact>
                            <Hourly />
                        </Route>
                        <Route path="/daily" exact>
                            <Daily />
                        </Route>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                    </Switch>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
