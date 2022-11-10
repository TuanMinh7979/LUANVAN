import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: "Người dùng",
        isLogin: false
    },
    reducers:{
        setUserLogin: (state, action) => {
            console.log(action.payload)
            state.user = action.payload
            state.isLogin = true
        },
        setUserLogout: (state, action) => {
            state.user = "Người dùng"
            state.isLogin = false
            console.log(state)
        }
    }
})

export const { setUserLogin, setUserLogout } = userSlice.actions
export default userSlice.reducer;