import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuActive: false
}
export const LayoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        menuToggle: (state) => {
            state.isMenuActive = !state.isMenuActive
        },
        menuClose: (state) => {
            state.isMenuActive = false
        },

    }
})

// @ts-ignore
export const { menuToggle,menuClose } = LayoutSlice.actions