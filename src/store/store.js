import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weather from "./reducers/currentWeather";

const rootReducer = combineReducers({
  weather,
})

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
