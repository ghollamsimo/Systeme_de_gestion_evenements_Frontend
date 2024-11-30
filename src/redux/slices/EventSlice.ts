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

export const index = createAsyncThunk(
    "event/index",
    async (_ , {rejectWithValue}) => {
        try {
            const res = await EventService.index()
            return res.data
        }catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
)

export const store = createAsyncThunk(
    "event/store",
    async (data: FormData, { rejectWithValue }) => {
        try {
            const res = await EventService.store(data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const deleteEvent = createAsyncThunk(
    "event/delete",
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await EventService.delete(id);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

const eventSlice = createSlice({
    name: 'event',
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
                state.errorMessage = action.payload?.message || "failed";
            })
            .addCase(store.pending, (state) => {
                state.loading = true;
            })
            .addCase(store.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(store.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "login failed";
            })
            .addCase(index.pending, (state) => {
                state.loading = true;
            })
            .addCase(index.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(index.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "login failed";
            })
            .addCase(deleteEvent.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(deleteEvent.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "delete failed";
            })
    }
})

export default eventSlice.reducer;