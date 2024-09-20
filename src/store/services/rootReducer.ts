import { authApi, groundApi } from './index';
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer, groundReducer } from './index';

const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    ground: groundReducer,
    [groundApi.reducerPath]: groundApi.reducer
});

export default rootReducer;
