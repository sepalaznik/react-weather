import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import forecastReducer from "./reducers/forecastReducer";
import cityReducer from "./reducers/cityReducer";

const reducers = combineReducers({
    cityReducer,
    forecastReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
