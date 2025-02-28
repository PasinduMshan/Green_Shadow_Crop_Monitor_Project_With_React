import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "../reducers/FieldSlice.ts";

export const store = configureStore({
    reducer: {
        field : FieldSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;