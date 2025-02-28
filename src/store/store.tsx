import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "../reducers/FieldSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";

export const store = configureStore({
    reducer: {
        field : FieldSlice,
        user: UserSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;