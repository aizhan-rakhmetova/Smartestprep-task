import { createSlice} from '@reduxjs/toolkit';
import {fetchCountries} from "../../../../api/api";


const countryOfResidenceSlice = createSlice({
    name: 'countryOfResidence',
    initialState: {
        countries: [],
        status: 'idle',
        error: null,
        value: ''
    },
    reducers: {
        setCountry: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCountry } = countryOfResidenceSlice.actions;

export default countryOfResidenceSlice.reducer;
