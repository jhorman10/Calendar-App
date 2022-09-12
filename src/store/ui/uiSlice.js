import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onOpenDateModal: (state) => {
            state.isDateModalOpen = false;
        },
    }
});


export const { increment } = uiSlice.actions;