import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: "Người dùng",
        isLogin: false
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer;