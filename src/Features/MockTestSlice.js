import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mockTest = createAsyncThunk("mock-data", async() =>{
    const response = await axios.get("https://mern-backend-pntb.onrender.com/api/mocktest").then(res => res.data).catch(err => console.log(err))
    return response
})

const MockTestSlice = createSlice({
    name: 'mock test',
    initialState: {
        test: [],
        isLoading: false,
        isError: false
    },
    extraReducers:(builder) =>{
        builder.addCase(mockTest.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(mockTest.fulfilled, (state, action) =>{
            state.isLoading = false
            state.test = action.payload
        })
        builder.addCase(mockTest.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            console.log(action.payload)
        })
    }
})

export default MockTestSlice.reducer