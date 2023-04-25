import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        activeButton: 'Eng',
    },
    reducers: {
        // срезах создаются для изменения состояния Redux и обрабатываются автоматически
        // при диспетчеризации соответствующего действия (action).
        toggleLanguage: (state, action) => {
            state.activeButton = action.payload;

        },
    },
});


export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;

