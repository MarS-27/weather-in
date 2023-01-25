import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URI } from "../constants/index";

const FORECAST_WEATHER_API_KEY = process.env.REACT_APP_FORECAST_WEATHER_API;

export const fetchWeatherForecast = createAsyncThunk(
    "weatherForecast/fetchWeatherForecast",
    async (params, { rejectWithValue }) => {
        const [ latitude, longitude ] = params;
        try {
            const response = await axios.get(`${MAIN_URI}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${FORECAST_WEATHER_API_KEY}`);
            return response.data.list;
        } catch (error) {
            return rejectWithValue(error.message); 
        }
    }
);