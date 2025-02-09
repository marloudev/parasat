import { createSlice } from '@reduxjs/toolkit'


export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    item:{}
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setItem: (state, action) => {
        state.item = action.payload
      },
  },
})
export const { 
    setItems,
    setItem
 } = itemSlice.actions

export default itemSlice.reducer
