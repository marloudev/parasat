import { createSlice } from '@reduxjs/toolkit'


export const stockItemSlice = createSlice({
  name: 'stock_item',
  initialState: {
    stock_items: [],
    stock_item:{}
  },
  reducers: {
    setStockItems: (state, action) => {
      state.stock_items = action.payload
    },
    setStockItem: (state, action) => {
        state.stock_item = action.payload
      },
  },
})
export const { 
    setStockItems,
    setStockItem
 } = stockItemSlice.actions

export default stockItemSlice.reducer
