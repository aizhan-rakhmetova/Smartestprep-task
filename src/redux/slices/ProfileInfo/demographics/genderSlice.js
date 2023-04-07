import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gender: '',
};

const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {
        setGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const { setGender } = genderSlice.actions;

export default genderSlice.reducer;
