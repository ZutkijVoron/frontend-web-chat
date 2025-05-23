import { createSlice } from '@reduxjs/toolkit'
import getUser from '../utils/getUser'

const initialState = (() =>
    getUser()
)()

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { state, ...action.payload }
        },
    },
})

export const selectUser = state => state.user

export const { setUser } = userSlice.actions

export default userSlice.reducer
