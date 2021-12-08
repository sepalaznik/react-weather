# React Weather

https://github.com/sepalaznik/react-weather.git

Sergei Palaznik, 2021

## Used teqnologies:
- webpack settings
- ReactJS
- React Router
- css variables
- fetch axios data with OpenWeather One Call API

## Problems:
- время по часовому поясу ушло на 1 час вперед?
- как отрендерить карточки hourly и daily только после загрузки данных?
- выбрать из запроса hourly и daily только нужные параметры и обрезать их до 7 или 8 записей?
- повесить на табы смену класса "active".

## Available Scripts:

### npm run dev
Runs the app in the development mode on the port "http://localhost:3000".

### npm run build
Builds the app for production to the build folder (./build).
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!
