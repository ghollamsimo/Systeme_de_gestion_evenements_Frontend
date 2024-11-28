import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice.ts";
import eventSlice from "./slices/EventSlice.ts";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        event: eventSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;