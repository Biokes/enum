import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cohort} from "@/interfaces/interfaces";
const initialState:Cohort[]= []

export const CohortSlice = createSlice({
    name:'cohorts',
    initialState,
    reducers:{
        createCohort(state,action:PayloadAction<Cohort>){
            action.payload.id = initialState.length
            state.push(action.payload)
            sessionStorage.setItem("cohorts",JSON.stringify(action.payload))
        }
    }
})
export const {createCohort} = CohortSlice.actions;
export default CohortSlice.reducer;