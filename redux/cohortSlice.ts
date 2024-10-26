import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Cohort } from "@/interfaces/interfaces";

const initialState :Cohort[]= [];

const cohortSlice = createSlice({
    name: "cohorts",
    initialState,
    reducers: {
        saveCohort(state, action:PayloadAction<Cohort>) {
            console.log('cohorts about to be saved as : ',action.payload)
            state.push(action.payload)
            console.log('cohorts saved as : ',state)
        },
    },

});
export const { saveCohort } = cohortSlice.actions;
export default cohortSlice.reducer;
