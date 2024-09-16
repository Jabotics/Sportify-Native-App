import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    name: string;
}

export const initialState: AuthState = {
    name: 'john'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeName: (state) => {
            state.name = 'peter'
        }
    }
});

export const { changeName } = authSlice.actions;
export default authSlice.reducer;