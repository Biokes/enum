import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cohort} from "@/interfaces/interfaces";

let initialState:Cohort[]= []

export const CohortSlice = createSlice({
    name:'cohorts',
    initialState,
    reducers:{
        createCohort(state,action:PayloadAction<Cohort>){
            action.payload.id = initialState.length
            state.push(action.payload)
            sessionStorage.setItem("cohorts",JSON.  stringify(action.payload))
        },
        setCohorts(){
            const storedArray : string| null = sessionStorage.getItem('cohorts')
            initialState = storedArray ? JSON.parse(storedArray) : []
        }
    }
})
export const {createCohort, setCohorts} = CohortSlice.actions;
export default CohortSlice.reducer;