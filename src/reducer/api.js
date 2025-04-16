import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    register: process.env.REGISTER
        || 'http://192.168.1.212:5000/auth/register',
    login: process.env.LOGIN
        || 'http://192.168.1.212:5000/auth/login',
    connect: process.env.CONNECT
        || 'http://192.168.1.212:5000/chat',
    sendMessage: process.env.SENDMESSAGE
        || 'http://192.168.1.212:5000/chat'
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setApi: (state, action) => {
            state = { state, ...action.payload }
        },
    }
})

export const selectApi = state => state.api

export const { setApi } = apiSlice.actions


export default apiSlice.reducer
