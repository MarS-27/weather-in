import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GeoApi = axios.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=10&appid=c1782b6a89b16bf010aec0a97e528815').then(resp => resp.data);

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (params) => {
        const [ latitude, longitude ] = params;
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f181de35f66e407df595ce26a66d64f1`);
    
        return response.data;
    }
)
