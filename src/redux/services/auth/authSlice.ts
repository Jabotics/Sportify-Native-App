import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { authApi } from "./authApi";

interface OTPData {
    status: string;
    message: string;
    data: {
        id: string,
        otp: number
    }
}

interface ValidateOTPData {
    status: string;
    message: string;
    data: {
        payload: {}
    }
}

export interface AuthState {    
    status: 'idle' | 'pending' |'success' | 'fail';
    showLoginPage: boolean; 
    resData?: OTPData;    
    user: {}
}

const initialState: AuthState = {    
    status: 'idle',
    showLoginPage: true,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {        
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(authApi.endpoints.login.matchPending, (state)=>{
            state.status = 'pending';
        })
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action: PayloadAction<OTPData>)=>{
            state.status = 'success';
            state.resData = action.payload;
            console.log(action.payload);
            state.showLoginPage = false;                  
        })
        .addMatcher(authApi.endpoints.login.matchRejected, (state)=>{
            state.status = 'fail';
        })
        .addMatcher(authApi.endpoints.validateOtp.matchFulfilled, (state, action: PayloadAction<any>)=>{
            console.log(action.payload.Response.data.payload);
            state.user = action.payload.Response.data.payload;
            state.showLoginPage = true;
        })
    },
});

export default authSlice.reducer;