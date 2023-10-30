import { configureStore } from '@reduxjs/toolkit'
import MockTestSlice from '../Features/MockTestSlice'

export default configureStore({
    reducer: {
        test: MockTestSlice
    }
})