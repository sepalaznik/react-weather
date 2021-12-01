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
    const [cityCoordinates, setCityCoordinates] = React.useState("lat=53.9&lon=27.5667");

    React.useEffect(() => {
        async function getOpenWeatherData(coordinates) {
            const URL = "https://api.openweathermap.org/data/2.5/onecall";
            const API_KEY = "317d8d98230306f1440ac5140bd1461a";

            try {
                await axios.get(`${URL}?${coordinates}&appid=${API_KEY}&exclude=minutely,hourly,alerts&units=metric&lang=ru`)
                    .then((response) => response.data)
                    .then((data) => {
                        const openWeatherData = {
                            temperature: data.current.temp.toFixed(),
                            feels_like: data.current.feels_like.toFixed(),
                            pressure: (data.current.pressure / 1.33).toFixed(),
                            humidity: data.current.humidity,
                            condition: data.current.weather[0].description,
                            icon: data.current.weather[0].icon,
                            wind_speed: data.current.wind_speed.toFixed(1),
                            wind_direction: data.current.wind_deg,
                        }
                        setIsLoading(false);
                        setForecastData(openWeatherData);
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
