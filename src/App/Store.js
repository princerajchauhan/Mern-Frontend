import { configureStore } from '@reduxjs/toolkit'
import MockTestSlice from '../Features/MockTestSlice'
import VideoSlice from '../Features/VideoSlice'
import MightSlice from '../Features/MightSlice'
import ProjectSlice from '../Features/ProjectSlice'
import AllTestSlice from '../Features/AllTestSlice'

export default configureStore({
    reducer: {
        test: MockTestSlice,
        video: VideoSlice,
        might: MightSlice,
        project: ProjectSlice,
        alltest: AllTestSlice
    }
})