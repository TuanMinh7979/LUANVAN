import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: JSON.parse(sessionStorage.getItem('user'))==null?"Người dùng":JSON.parse(sessionStorage.getItem('user')),
        isLogin: sessionStorage.getItem('user')?true:false
    },
    reducers:{
        setUserLogin: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        },
        setUserLogout: (state, action) => {
            state.user = "Người dùng"
            state.isLogin = false
            sessionStorage.clear()
        },
        setUserInfo:(state, action)=>{
            state.user = action.payload
            state.isLogin = true
        }
    }
})

export const { setUserLogin, setUserLogout, setUserInfo } = userSlice.actions
export default userSlice.reducer;