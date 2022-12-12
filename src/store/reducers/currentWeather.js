import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../api/weatherApi";

const initialState = {
    weather: [],
    loading: false,
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
        
    }
    // reducers: {
    //     weatherNow: (state, { payload }) => {
    //         getCurrentWeather().then(resp => {
    //             payload = state.weather.push(resp.data);
    //         })
            
            
    //     },
    // }
})

export const { weatherNow } = weatherSlice.actions;



export default weatherSlice.reducer;