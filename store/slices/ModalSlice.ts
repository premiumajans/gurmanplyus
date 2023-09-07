import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: true
}
export const LanguageSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalClose: (state) => {
            state.active = false
        },
        modalOpen: (state) => {
            state.active = false
        }
    }
})
