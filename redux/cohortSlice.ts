// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Cohort } from "@/interfaces/interfaces";
// import axios from "axios";
// import { AppDispatch } from "@/redux/store";
// import { CLOUD_NAME } from "@/data";
//
// let initialState: Cohort[] = [];
// const createCohort = (cohortData: Cohort) => async () => {
//     try {
//         const uploadResponse = await axios.post(
//             `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//             cohortData,
//             {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             }
//         );
//         cohortData.avatar = uploadResponse.data.secure_url;
//         console.log('Uploaded successfully : (response)-> ',cohortData.avatar )
//         return cohortData
//     } catch (error) {
//         console.error("Error uploading image:", error);
//     }
// };
// const cohortSlice = createSlice({
//     name: "cohorts",
//     initialState,
//     reducers: {
//         saveCohort(state, action: PayloadAction<Cohort>) {
//             action.payload.id = state.length;
//             const updatedState = createCohort(action.payload).
//                 // [...state,action.payload]
//
//             sessionStorage.setItem("cohorts", JSON.stringify(updatedState));
//             return updatedState;
//         },
//         setCohorts(state) { import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
//             import { Cohort } from "@/interfaces/interfaces";
//             import axios from "axios";
//             import { CLOUD_NAME } from "@/data";
//
//             const initialState: Cohort[] = [];
//
// // Create an async thunk for saving a cohort with image upload
//             export const saveCohort = createAsyncThunk(
//                 "cohorts/saveCohort",
//                 async (cohortData: Cohort, { rejectWithValue }) => {
//                     try {
//                         // Upload the image to Cloudinary
//                         const uploadResponse = await axios.post(
//                             `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//                             cohortData,
//                             {
//                                 headers: {
//                                     "Content-Type": "multipart/form-data",
//                                 },
//                             }
//                         );
//
//                         // Set the avatar URL in cohortData
//                         cohortData.avatar = uploadResponse.data.secure_url;
//                         console.log('Uploaded successfully: (response) -> ', cohortData.avatar);
//                         return cohortData; // Return the updated cohortData
//                     } catch (error) {
//                         console.error("Error uploading image:", error);
//                         return rejectWithValue("Image upload failed"); // Reject with a message
//                     }
//                 }
//             );
//
//             const cohortSlice = createSlice({
//                 name: "cohorts",
//                 initialState,
//                 reducers: {
//                     setCohorts(state) {
//                         const storedArray: string | null = sessionStorage.getItem("cohorts");
//                         return storedArray ? JSON.parse(storedArray) : [];
//                     },
//                     getCohortsSaved() {
//                         const data = sessionStorage.getItem("cohorts");
//                         return data ? JSON.parse(data) : [];
//                     },
//                 },
//                 extraReducers: (builder) => {
//                     builder
//                         .addCase(saveCohort.fulfilled, (state, action: PayloadAction<Cohort>) => {
//                             action.payload.id = state.length; // Assign ID based on current state length
//                             state.push(action.payload); // Update the state with the new cohort
//                             sessionStorage.setItem("cohorts", JSON.stringify(state)); // Update session storage
//                         })
//                         .addCase(saveCohort.rejected, (state, action) => {
//                             console.error("Failed to save cohort:", action.payload);
//                         });
//                 },
//             });
//
//             export const { setCohorts, getCohortsSaved } = cohortSlice.actions;
//             export default cohortSlice.reducer;
//
//             const storedArray: string | null = sessionStorage.getItem("cohorts");
//             return storedArray ? JSON.parse(storedArray) : [];
//         },
//         getCohortsSaved() {
//             const data = sessionStorage.getItem("cohorts");
//             return data ? JSON.parse(data) : [];
//         },
//     },
// });
// export const { saveCohort, setCohorts, getCohortsSaved } = cohortSlice.actions;
// export default cohortSlice.reducer;
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Cohort } from "@/interfaces/interfaces";
import axios from "axios";
import { CLOUD_NAME } from "@/data";

const initialState: Cohort[] = [];

// Create an async thunk for saving a cohort with image upload
export const saveCohort = createAsyncThunk(
    "cohorts/saveCohort",
    async (cohortData: Cohort, { rejectWithValue }) => {
        try {
            // Upload the image to Cloudinary
            const uploadResponse = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                cohortData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // Set the avatar URL in cohortData
            cohortData.avatar = uploadResponse.data.secure_url;
            console.log('Uploaded successfully: (response) -> ', cohortData.avatar);
            return cohortData; // Return the updated cohortData
        } catch (error) {
            console.error("Error uploading image:", error);
            return rejectWithValue("Image upload failed"); // Reject with a message
        }
    }
);

const cohortSlice = createSlice({
    name: "cohorts",
    initialState,
    reducers: {
        setCohorts(state) {
            const storedArray: string | null = sessionStorage.getItem("cohorts");
            return storedArray ? JSON.parse(storedArray) : [];
        },
        getCohortsSaved() {
            const data = sessionStorage.getItem("cohorts");
            return data ? JSON.parse(data) : [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCohort.fulfilled, (state, action: PayloadAction<Cohort>) => {
                action.payload.id = state.length; // Assign ID based on current state length
                state.push(action.payload); // Update the state with the new cohort
                sessionStorage.setItem("cohorts", JSON.stringify(state)); // Update session storage
            })
            .addCase(saveCohort.rejected, (state, action) => {
                console.error("Failed to save cohort:", action.payload);
            });
    },
});

export const { setCohorts, getCohortsSaved } = cohortSlice.actions;
export default cohortSlice.reducer;
