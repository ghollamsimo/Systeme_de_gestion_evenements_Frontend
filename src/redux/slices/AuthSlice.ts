import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService.ts";
import { initialState } from "../initialisation.ts";
import {RegisterField} from "../../constant.ts";

export const register = createAsyncThunk(
    "auth/register",
    async ({ name, email, password, role }: { name: string; email: string; password: string; role: string }, { rejectWithValue }) => {
        try {
            const response: RegisterField = await AuthService.register({ name, email, password, role});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response = await AuthService.login({ email, password });
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data || error.message || "Something went wrong.";
            return rejectWithValue(errorMessage);
        }
    }
);
export const show = createAsyncThunk(
    "auth/show",
    async (id , {rejectWithValue}) => {
        try {
            const res = await AuthService.show(id)
            return res.data
        }catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
)

const authSlice = createSlice({
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
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(register.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Registration failed";
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "login failed";
            })
            .addCase(show.pending, (state) => {
                state.loading = true;
            })
            .addCase(show.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.dataObj = action.payload;
                state.errorMessage = null;
            })
            .addCase(show.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.errorMessage = action.payload || "Login failed";
            })
    }
})

export default authSlice.reducer;