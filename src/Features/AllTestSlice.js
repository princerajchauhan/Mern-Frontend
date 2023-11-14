import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AllTest = createAsyncThunk("all-test", async(id) =>{
    const response = await axios.get(`https://mern-backend-pntb.onrender.com/api/getalltest/${id}`).then(res => res.data).catch(err => console.log(err))
    return response
})

const AllTestSlice = createSlice({
    name: 'alltest',
    initialState:{
        alltest: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(AllTest.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(AllTest.fulfilled, (state, action) =>{
            state.isLoading = false
            state.alltest = action.payload
        })
        builder.addCase(AllTest.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            console.log(action.payload)
        })
    }
})

export default AllTestSlice.reducer