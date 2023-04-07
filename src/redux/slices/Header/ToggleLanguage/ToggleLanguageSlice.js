import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        activeButton: 'Eng',
    },
    reducers: {
        toggleLanguage: (state, action) => {
            state.activeButton = action.payload;
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;

