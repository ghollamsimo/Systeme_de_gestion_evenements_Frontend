import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice.ts";
import eventSlice from "./slices/EventSlice.ts";
import participantSlice from "./slices/ParticipantSlice.ts";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        event: eventSlice,
        participant: participantSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;