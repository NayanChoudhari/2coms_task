import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userdata: {},
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        userdata: (state, action) => {
            state.userdata = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { userdata } = counterSlice.actions

export default counterSlice.reducer