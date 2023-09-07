import { createSlice } from "@reduxjs/toolkit";
import { types } from "util";

const initialState = {
    activeLanguage: "az"

}
export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.activeLanguage = action.payload
        }
    }
})
 // @ts-ignore
export const { setLanguage } = LanguageSlice.actions