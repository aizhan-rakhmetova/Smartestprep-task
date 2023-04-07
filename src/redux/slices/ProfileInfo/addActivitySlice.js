import { createSlice } from '@reduxjs/toolkit';

export const addActivitySlice = createSlice({
    name: 'addActivity',
    initialState: [],
    reducers: {
        addActivity: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addActivity } = addActivitySlice.actions;

export default addActivitySlice.reducer;
