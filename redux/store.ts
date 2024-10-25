import {configureStore} from "@reduxjs/toolkit";
import userReducers from './UserSlice'
import { TypedUseSelectorHook, useDispatch as originalUseDispatch, useSelector as originalUseSelector } from 'react-redux';
import cohortReducers from './cohortSlice'

export const store = configureStore({
    reducer:{
        user:userReducers,
        cohorts:cohortReducers
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
