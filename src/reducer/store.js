import { configureStore } from "@reduxjs/toolkit";
import slice from './postsSlice'

export const store = configureStore({
    reducer :{
        posts : slice,
    }
})