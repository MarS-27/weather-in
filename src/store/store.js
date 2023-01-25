import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weather from "./reducers/weather";
import geolocation from "./reducers/geolocation";
import forecast from "./reducers/forecast";

const rootReducer = combineReducers({
  weather,
  geolocation,
  forecast,
  })

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
