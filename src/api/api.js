import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk('countryOfResidence/fetchCountries', async () => {
    const response = await axios.get('https://api.dev-smartestprep.com/api/directory/countries/?limit=112');
    return response.data.results;
});

export const fetchCities = createAsyncThunk('cityOfResidence/fetchCities', async () => {
    const response = await axios.get('https://api.dev-smartestprep.com/api/directory/cities/?limit=2158');
    return response.data.results;
});
