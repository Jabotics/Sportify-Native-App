import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { groundApi } from "./groundApi";

interface GroundData {
    id: string;
    venue: {
        _id: string;
        name: string;
        address: string;
        geo_location: string;
    }
    name: string;
    dimensions: object;
    supported_sports: object[];
    rules: object;
    ground_type: string;
    city: object;
    images: string[];
    amenities: string;
    coupon_available: boolean;
    is_popular: boolean;
}

interface IncomingData {
    status: string;
    message: string;
    data: {
        count: number;
        grounds: GroundData[]
    }
}

export interface GroundState {
    status: 'idle' | 'pending' | 'success' | 'fail';
    grounds: GroundData[];
}

const initialState: GroundState = {
    status: 'idle',
    grounds: []
}

export const groundSlice = createSlice({
    name: 'ground',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addMatcher(groundApi.endpoints.fetchGrounds.matchPending, (state)=>{
            state.status = 'pending';
        })
        .addMatcher(groundApi.endpoints.fetchGrounds.matchFulfilled, (state, action: PayloadAction<IncomingData>)=>{
            state.status = 'pending';
            state.grounds = action.payload.data.grounds;            
        })
        .addMatcher(groundApi.endpoints.fetchGrounds.matchRejected, (state)=>{
            state.status = 'fail';
        })
    }    
});

export default groundSlice.reducer;