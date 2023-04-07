import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    surname: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSurname: (state, action) => {
            state.surname = action.payload;
        },
    },
});

export const { setName, setSurname } = profileSlice.actions;
export default profileSlice.reducer;
