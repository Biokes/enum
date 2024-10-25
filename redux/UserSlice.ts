import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserDetails} from '@/interfaces/interfaces'

const initialState:UserDetails ={
    username:'Onowomano',
    clickedCohortIndex:-1
}
export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsername(state,action:PayloadAction<string>){
            state.username = action.payload;
        },
        setClickedCohortIndex(state, action:PayloadAction<number>){
            state.clickedCohortIndex = action.payload
        }
    }
})
export const {setUsername,setClickedCohortIndex} = UserSlice.actions;
export default UserSlice.reducer;