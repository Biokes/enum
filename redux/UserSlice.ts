import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cohort, UserDetails} from '@/interfaces/interfaces'
import Image1 from '@/assets/create_cohort.png'
const initialState:UserDetails ={
    username:'Onowomano',
    clickedCohortIndex:-1,
    clickedCohort: {
        name:'',
        description:'',
        avatar: Image1,
        startDate: null,
        endDate: null,
        program:'',
        id:0,
        dateCreated:new Date(),
        numberOfLearners:25
    }
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
        },
        setClickedCohort(state, action:PayloadAction<Cohort>){
            state.clickedCohort = action.payload
        }
    }
})
export const {setUsername,setClickedCohortIndex,setClickedCohort} = UserSlice.actions;
export default UserSlice.reducer;