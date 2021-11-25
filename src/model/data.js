import axios from "axios";

export async function getForecastData(city) {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "49c52c385165361328d4aafbff37e087";

    try {
        await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`).then((response) => {
            const forecastData = {
                temperature: response.data.main.temp.toFixed(),
                feels_like: response.data.main.feels_like.toFixed(),
                pressure: (response.data.main.pressure / 1.33).toFixed(),
                humidity: response.data.main.humidity,
                cloudy: response.data.weather.description,
                icon: response.data.weather.icon,
                wind_speed: response.data.wind.speed,
                wind_direction: response.data.wind.deg,
            }
            return forecastData;
        })
    } catch (error) {
        alert("Ошибка загрузки данных с сервера");
    }
}
