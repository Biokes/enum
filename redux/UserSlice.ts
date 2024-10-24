import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserDetails} from '@/interfaces/interfaces'

const initialState:UserDetails ={
    username:'Onowomano',
    clickedCohortIndex:0
}
export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsername(state,action:PayloadAction<string>){
            initialState.username = action.payload;
        },
        setClickedCohortIndex(state, action:PayloadAction<number>){
            initialState.clickedCohortIndex = action.payload
        }
    }
})
export const {setUsername,setClickedCohortIndex} = UserSlice.actions;
export default UserSlice.reducer;