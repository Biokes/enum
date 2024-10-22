import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserDetails} from '@/interfaces/interfaces'

const initialState:UserDetails ={
    username:'Onowomano'
}
export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsername(state,action:PayloadAction<string>){
            initialState.username = action.payload;
        }
    }
})