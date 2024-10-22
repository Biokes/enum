import {configureStore} from "@reduxjs/toolkit";
import userReducers from './UserSlice'
export const store = configureStore({
    reducer:{
        user:userReducers
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;