import { configureStore } from '@reduxjs/toolkit'
import MockTestSlice from '../Features/MockTestSlice'
import VideoSlice from '../Features/VideoSlice'
import MightSlice from '../Features/MightSlice'

export default configureStore({
    reducer: {
        test: MockTestSlice,
        video: VideoSlice,
        might: MightSlice
    }
})