import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mightData = createAsyncThunk("might-data", async() =>{
    const response = await axios.get("https://mern-backend-pntb.onrender.com/api/might").then(res => res.data).catch(err => console.log(err))
    return response
})

const MightSlice = createSlice({
    name:'might',
    initialState:{
        might: [],
        isLoading: false,
        isError: false
    },
    extraReducers:(builder) =>{
        builder.addCase(mightData.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(mightData.fulfilled, (state, action) =>{
            state.isLoading = false
            state.might = action.payload
        })
        builder.addCase(mightData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = false
            console.log(action.payload)
        })
    }
})

export default MightSlice.reducer