import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherForecast } from "../../api/weatherApiForecast";

const initialState = {
    weatherForecast: [],
    loadingForecast: false,
    errorForecast: "",
};

const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherForecast.pending.type, (state) => {
                state.loadingForecast = true;
            })
            .addCase(fetchWeatherForecast.fulfilled.type, (state, action) => {
                state.loadingForecast = false;
                state.weatherForecast = action.payload;
            })
            .addCase(fetchWeatherForecast.rejected.type, (state, action) => {
                state.loadingForecast = false;
                state.errorForecast = action.payload;
            }) 
    }
})

export default forecastSlice.reducer;