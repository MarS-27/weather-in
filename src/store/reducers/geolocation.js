import { createSlice } from "@reduxjs/toolkit";
import { fetchGeolocation } from "../../api/geolocationApi";

const initialState = {
    cities: [],
    loadingSearch: false,
    errorSearch: "",
};

const geolocationSlice = createSlice({
    name: "geolocation",
    initialState,
    reducers: {
        cleanCities: (state) => {
            state.cities = [];
            state.errorSearch = "";
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGeolocation.pending.type, (state) => {
                state.loadingSearch = true;
                state.cities = [];
            })
            .addCase(fetchGeolocation.fulfilled.type, (state, action) => {
                state.loadingSearch = false;
                state.cities = action.payload;
            })
            .addCase(fetchGeolocation.rejected.type, (state, action) => {
                state.loadingSearch = false;
                state.errorSearch = action.payload;
            })
    }
})

export const { cleanCities } = geolocationSlice.actions;

export default geolocationSlice.reducer;