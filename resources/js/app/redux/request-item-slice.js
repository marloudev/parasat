import { createSlice } from "@reduxjs/toolkit";

export const requestItemSlice = createSlice({
    name: "request_item",
    initialState: {
        request_items: [],
        request_item: {},
    },
    reducers: {
        setRequestItems: (state, action) => {
            state.request_items = action.payload;
        },
        setRequestItem: (state, action) => {
            state.request_item = action.payload;
        },
    },
});
export const { setRequestItems, setRequestItem } = requestItemSlice.actions;

export default requestItemSlice.reducer;
