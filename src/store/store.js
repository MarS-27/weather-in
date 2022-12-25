import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weather from "./reducers/weather";
import geolocation from "./reducers/geolocation";

const rootReducer = combineReducers({
  weather,
  geolocation,
})

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
