import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name: "applications",
    initialState: {
        applications: [],
        application: {},
    },
    reducers: {
        setApplications: (state, action) => {
            state.applications = action.payload;
        },
        setApplication: (state, action) => {
            state.applications = action.payload;
        },
    },
});
export const { setApplications, setApplication } = applicationSlice.actions;

export default applicationSlice.reducer;
