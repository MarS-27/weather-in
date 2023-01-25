import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MAIN_URI } from "../constants/index";

const GEO_API_KEY = process.env.REACT_APP_GEO_API;

export const fetchGeolocation = createAsyncThunk(
    "geo/fetchGeolocation",
    async (enteredCity, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${MAIN_URI}/geo/1.0/direct?q=${enteredCity}&limit=10&appid=${GEO_API_KEY}`);
            if (!response.data[0]) {
                return "NOT_FOUND";
            } else {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue(error.message); 
        }
    }
);
