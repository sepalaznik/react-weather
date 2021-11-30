// Описание погоды при получении данных из api.openweathermap.org на английском:

export const conditionDescription = (props) => {
    switch (props.condition) {
        case 'clear sky':
            return "ясно";
            break;
        case 'few clouds':
            return "небольшая обласность с прояснениями";
            break;
        case 'scattered clouds':
            return "облачно";
            break;
        case 'broken clouds':
        case 'overcast clouds':
            return "сплошная облачность";
            break;
        case 'shower rain':
            return "сильный дождь";
            break;
        case 'rain':
            return "небольшой дождь";
            break;
        case 'thunderstorm':
            return "гроза";
            break;
        case 'snow':
            return "снег";
            break;
        case 'mist':
            return "туман";
            break;
        default:
            return null;
    }
};

// Вставить функцию в ThisDayDatails/index.jsx, и добавить результат в item.cloudy:
// value: conditionDescription(forecastData),
