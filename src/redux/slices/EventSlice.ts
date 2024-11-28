import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import EventService from "../../services/EventService.ts";
import {initialState} from "../initialisation.ts";

export const stats = createAsyncThunk(
    "event/stats",
    async (_ , {rejectWithValue}) => {
        try {
            const res = await EventService.stats()
            return res.data
        }catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
)


const eventSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.response = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(stats.pending, (state) => {
                state.loading = true;
            })
            .addCase(stats.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(stats.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.errorMessage = action.payload?.message || "Registration failed";
            })

    }
})

export default eventSlice.reducer;