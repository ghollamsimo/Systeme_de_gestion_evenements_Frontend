import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import ParticipantService from "../../services/ParticipantService.ts";
import {initialState} from "../initialisation.ts";

export const store = createAsyncThunk(
    "organiser/store",
    async (data: FormData, { rejectWithValue }) => {
        try {
            const res = await ParticipantService.store(data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const update = createAsyncThunk(
    "organiser/update",
    async ({id , data} : {id: string, data: FormData}, { rejectWithValue }) => {
        try {
            const res = await ParticipantService.update(id, data);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "organiser/delete",
    async (id : string, { rejectWithValue }) => {
        try {
            const res = await ParticipantService.delete(id);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);


const participantSlice = createSlice({
    name: 'participant',
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
                state.errorMessage = action.payload || "store failed";
            })
            .addCase(update.pending, (state) => {
                state.loading = true;
            })
            .addCase(update.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(update.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "update failed";
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(deleteUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "delete failed";
            })

    }
})

export default participantSlice.reducer;