import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URI } from "../constants/index";

const GEO_API_KEY = process.env.REACT_APP_GEO_API;
const CURRENT_WEATHER_API_KEY = process.env.REACT_APP_CURRENT_WEATHER_API;

export const GeoApi = axios.get(`${MAIN_URI}/geo/1.0/direct?q=London&limit=10&appid=${GEO_API_KEY}`).then(resp => resp.data);

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (params) => {
        const [ latitude, longitude ] = params;
        
        const response = await axios.get(`${MAIN_URI}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${CURRENT_WEATHER_API_KEY}`);
    
        return response.data;
    }
)
