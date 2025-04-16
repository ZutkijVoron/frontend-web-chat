import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './api'
import userReducer from './user'
import middlewares from '../middleware/index'

export const store = configureStore({
    reducer: {
        api: apiReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(
            middlewares.userMiddleware),
})
