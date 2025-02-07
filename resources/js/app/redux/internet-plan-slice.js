import { createSlice } from "@reduxjs/toolkit";

export const internetPlanSlice = createSlice({
    name: "internet_plans",
    initialState: {
        internet_plans: [],
    },
    reducers: {
        setInternetPlans: (state, action) => {
            state.internet_plans = action.payload;
        },
    },
});
export const { setInternetPlans } = internetPlanSlice.actions;

export default internetPlanSlice.reducer;
