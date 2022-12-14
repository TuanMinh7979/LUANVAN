import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('user')) == null ? "Người dùng" : JSON.parse(sessionStorage.getItem('user')),
        isLogin: sessionStorage.getItem('user') ? true : false
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.user = action.payload
            state.isLogin = true
        },

        setUserLogout: (state, action) => {
            state.user = "Người dùng"
            state.isLogin = false
            sessionStorage.clear()
        },

        //for candidate
        setActivatedCvId: (state, action) => {
            let cpState = { ...state.user };
            cpState.activatedCvId = action.payload;
            state.user = { ...cpState }
            //
            sessionStorage.setItem("user", JSON.stringify(state.user));
        },
  

        setApplyJobs: (state, action) => {
            let cpState = { ...state.user };
            cpState.applyJobs = action.payload;
            state.user = { ...cpState }
            //
            sessionStorage.setItem("user", JSON.stringify(state.user));
        },
        //update profile :
        setCandidateData: (state, action) => {
            state.user = action.payload
            state.isLogin = true
            sessionStorage.setItem("user", JSON.stringify(state.user));
        },

        //for candidate


    }
})

export const { setUserLogin, setUserLogout, setActivatedCvId, setApplyJobs, setCandidateData } = userSlice.actions
export default userSlice.reducer;