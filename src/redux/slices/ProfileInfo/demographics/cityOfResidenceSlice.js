import { createSlice} from '@reduxjs/toolkit';
import {fetchCities} from "../../../../api/api";


const cityOfResidenceSlice = createSlice({
    name: 'cityOfResidence',
    initialState: {
        cities: [],
        status: 'idle',
        error: null,
        value: ''
    },
    reducers: {
        setCity: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCity } = cityOfResidenceSlice.actions;

export default cityOfResidenceSlice.reducer;
