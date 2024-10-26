import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cohort } from "@/interfaces/interfaces";

const initialState :Cohort[]= [];

const cohortSlice = createSlice({
    name: "cohorts",
    initialState,
    reducers: {
        saveCohort(state, action:PayloadAction<Cohort>) {
            state.push(action.payload)
        },
    },

});
export const { saveCohort } = cohortSlice.actions;
export default cohortSlice.reducer;
