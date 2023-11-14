import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const ProjectData = createAsyncThunk('single-project', async(name) =>{
    const response = await axios.get(`https://mern-backend-pntb.onrender.com/proj/project/${name}`).then(res => res.data).catch(err => console.log(err))
    return response
})

const ProjectSlice = createSlice({
    name: 'project',
    initialState: {
        data: {},
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(ProjectData.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(ProjectData.fulfilled, (state, action) =>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(ProjectData.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            console.log(action.payload)
        })
    }

})

export default ProjectSlice.reducer