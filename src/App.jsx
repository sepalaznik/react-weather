import React from 'react';
import { Route, Switch } from 'react-router';

import axios from 'axios';
import { Home } from './pages/Home';
import { About } from './pages/About';
//import { Popup } from './components/Popup';
import { Header } from './components/Header';
import AppContext from "./context";

function App() {
    const [forecastData, setForecastData] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentCity, setCurrentCity] = React.useState("Минск");

    React.useEffect(() => {
        async function getOpenWeatherData(city) {
            const URL = "https://api.openweathermap.org/data/2.5/weather";
            const URL5 = "https://api.openweathermap.org/data/2.5/forecast";
            const API_KEY = "317d8d98230306f1440ac5140bd1461a";

            try {
                //await axios.get(`${URL5}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)
                await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`).then((response) => {
                    const openWeatherData = {
                        temperature: response.data.main.temp.toFixed(),
                        feels_like: response.data.main.feels_like.toFixed(),
                        pressure: (response.data.main.pressure / 1.33).toFixed(),
                        humidity: response.data.main.humidity,
                        condition: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        wind_speed: response.data.wind.speed.toFixed(1),
                        wind_direction: response.data.wind.deg,
                        date_forecast: response.data.dt_txt
                    }
                    setIsLoading(false);
                    setForecastData(openWeatherData);
                })
            } catch (error) {
                alert("Ошибка загрузки данных с сервера");
            }
        };
        getOpenWeatherData(currentCity);
    }, [currentCity]);

    return (
        <AppContext.Provider value={{ 
            currentCity,
            setCurrentCity,
            forecastData,
            isLoading
        }}>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                </Switch>
            </div>
        </AppContext.Provider>
    );
}
// <Popup />

export default App;
