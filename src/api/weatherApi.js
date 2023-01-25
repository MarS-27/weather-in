import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URI } from "../constants/index";

const CURRENT_WEATHER_API_KEY = process.env.REACT_APP_CURRENT_WEATHER_API;

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (params, { rejectWithValue }) => {
        const [ latitude, longitude ] = params;
        try {
            const response = await axios.get(`${MAIN_URI}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${CURRENT_WEATHER_API_KEY}`);
    
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message); 
        }
    }
);
