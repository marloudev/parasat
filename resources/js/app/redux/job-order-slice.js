import { createSlice } from "@reduxjs/toolkit";

export const jobOrderSlice = createSlice({
    name: "job_order",
    initialState: {
        job_orders: [],
        jo_order: {
            internet_plan: []
        },
    },
    reducers: {
        setJobOrders: (state, action) => {
            state.job_orders = action.payload;
        },
        setJobOrder: (state, action) => {
            state.jo_order = action.payload;
        },
    },
});
export const { setJobOrders, setJobOrder } = jobOrderSlice.actions;

export default jobOrderSlice.reducer;
