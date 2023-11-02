import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const videoLinks = createAsyncThunk("video-data", async()=>{
    const response = await axios.get("https://prince-ecom-backend.onrender.com/api/video").then(res => res.data).catch(err => console.log(err))
    return response
})

const VideoSlice = createSlice({
    name:"video",
    initialState:{
        video: [],
        isLoading: false,
        isError: false
    },
    extraReducers:builder=>{
        builder.addCase(videoLinks.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(videoLinks.fulfilled, (state, action) =>{
            state.isLoading = false
            state.video = action.payload
        })
        builder.addCase(videoLinks.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = false
            console.log(action.payload)
        })
    }
})

export default VideoSlice.reducer