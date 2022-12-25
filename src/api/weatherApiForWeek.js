import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URI } from "../constants/index";

const WEEK_WEATHER_API_KEY = process.env.REACT_APP_WEEK_WEATHER_API;

export const fetchWeatherForWeek = createAsyncThunk(
    "weatherForWeek/fetchWeatherForWeek",
    async (params, { rejectWithValue }) => {
        const [ latitude, longitude ] = params;
        
        try {
            const response = await axios.get(`${MAIN_URI}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEEK_WEATHER_API_KEY}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.code); 
        }
    }
);