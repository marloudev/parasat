import { createSlice } from "@reduxjs/toolkit";

export const internetPlanSlice = createSlice({
    name: "internet_plans",
    initialState: {
        internet_plans: [],
        internet_plan: {},
    },
    reducers: {
        setInternetPlans: (state, action) => {
            state.internet_plans = action.payload;
        },
        setInternetPlan: (state, action) => {
            state.internet_plan = action.payload;
        },
    },
});
export const { setInternetPlans, setInternetPlan } = internetPlanSlice.actions;

export default internetPlanSlice.reducer;
