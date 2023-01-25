import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherMap } from "../../api/weatherApiMap";

const initialState = {
    weatherMap: [],
    loadingMap: false,
    errorMap: "",
};

const weatherMapSlice = createSlice({
    name: 'weatherMap',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherMap.pending.type, (state) => {
                state.loadingMap = true;
            })
            .addCase(fetchWeatherMap.fulfilled.type, (state, action) => {
                state.loadingMap = false;
                state.weatherMap = action.payload;
            })
            .addCase(fetchWeatherMap.rejected.type, (state, action) => {
                state.loadingMap = false;
                state.errorMap = action.payload;
            }) 
    }
})

export default weatherMapSlice.reducer;