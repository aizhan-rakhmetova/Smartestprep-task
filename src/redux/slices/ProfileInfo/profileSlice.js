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
            // console.log(action);
            console.log(setName);
        },
        setSurname: (state, action) => {
            state.surname = action.payload;
        },
    },
});

//Once a slice is created, we can export the generated Redux action creators and the reducer function
// for the whole slice.

export const { setName, setSurname } = profileSlice.actions;
export default profileSlice.reducer;
