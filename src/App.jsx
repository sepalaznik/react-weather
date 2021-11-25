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
    let currentCity = "Минск";

    React.useEffect(() => {
        async function getOpenWeatherData(city) {
            const URL = "https://api.openweathermap.org/data/2.5/weather";
            const API_KEY = "49c52c385165361328d4aafbff37e087";

            try {
                await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`).then((response) => {
                    const openWeatherData = {
                        temperature: response.data.main.temp.toFixed(),
                        feels_like: response.data.main.feels_like.toFixed(),
                        pressure: (response.data.main.pressure / 1.33).toFixed(),
                        humidity: response.data.main.humidity,
                        cloudy: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        wind_speed: response.data.wind.speed.toFixed(1),
                        wind_direction: response.data.wind.deg,
                    }
                    return setForecastData(openWeatherData);
                })
            } catch (error) {
                alert("Ошибка загрузки данных с сервера");
            }
        };
        getOpenWeatherData(currentCity);
    }, []);

    return (
        <AppContext.Provider value={{ 
            currentCity,
            forecastData,
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
