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
    },
    heroText:'',
    popUpIndex:-1,
    searchContent:''
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
        },
        setHeroText(state, action:PayloadAction<string>){
            state.heroText = action.payload
        },
        setPoppedIndex(state, action:PayloadAction<number>){
            state.popUpIndex= action.payload
        },
        setSearchContent(state, action:PayloadAction<string>){
            state.searchContent = action.payload
        }
    }
})
export const {setUsername,setHeroText,setClickedCohortIndex,setClickedCohort,setPoppedIndex,setSearchContent} = UserSlice.actions;
export default UserSlice.reducer;