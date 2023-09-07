import { configureStore } from "@reduxjs/toolkit/dist"
import { LayoutSlice } from "./slices/LayoutSlice"
import { LanguageSlice } from "./slices/LanguageSlice"

export const store = configureStore({
    reducer: {
        [LayoutSlice.name]: LayoutSlice.reducer,
        [LanguageSlice.name]: LanguageSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

