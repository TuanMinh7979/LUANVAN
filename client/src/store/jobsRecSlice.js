import { createSlice } from "@reduxjs/toolkit";
//NOT USE THIS SLICE
export const jobsRecSlice = createSlice({
  name: "jobsRec",
  initialState: {
    jobsRec:
      JSON.parse(sessionStorage.getItem("jobsRec")) == null
        ? ""
        : JSON.parse(sessionStorage.getItem("jobsRec")),
  },
  reducers: {
    setJobsRec: (state, action) => {
      state.jobsRec = action.payload;
    },
    removeJobsRec: (state, action) => {
      state.jobsRec = "";
      sessionStorage.clear();
    },
  },
});

export const { setJobsRec, removeJobsRec } = jobsRecSlice.actions;
export default jobsRecSlice.reducer;
