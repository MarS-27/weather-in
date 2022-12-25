import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../api/weatherApi";
import { fetchWeatherForWeek } from "../../api/weatherApiForWeek";

const initialState = {
    weather: [],
    weatherForWeek: [],
    loading: false,
    error: "",
};


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending.type, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeather.fulfilled.type, (state, action) => {
                state.loading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected.type, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }) 
            .addCase(fetchWeatherForWeek.pending.type, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeatherForWeek.fulfilled.type, (state, action) => {
                state.loading = false;
                state.weatherForWeek = action.payload;
            })
            .addCase(fetchWeatherForWeek.rejected.type, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }) 
    }
})

export default weatherSlice.reducer;