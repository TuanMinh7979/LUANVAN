import { createSlice } from "@reduxjs/toolkit";
//NOT USE THIS SLICE
export const hrSearchSlice = createSlice({
  name: "hrSearch",
  initialState: {
    hrSearch: JSON.parse(sessionStorage.getItem('hrSearch')) == null ? "No Search" : JSON.parse(sessionStorage.getItem('hrSearch')),


  },
  reducers: {


  },
});

export const { setJobsRec, removeJobsRec } = hrSearchSlice.actions;
export default jobsRecSlice.reducer;
