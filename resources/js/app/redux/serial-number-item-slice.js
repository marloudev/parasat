import { createSlice } from '@reduxjs/toolkit'


export const serialNumberItemSlice = createSlice({
  name: 'serial_number_id',
  initialState: {
    serial_number_items: [],
    serial_number_item:{}
  },
  reducers: {
    setSerialNumberItems: (state, action) => {
      state.serial_number_items = action.payload
    },
    setSerialNumberItem: (state, action) => {
        state.serial_number_item = action.payload
      },
  },
})
export const { 
    setSerialNumberItems,
    setSerialNumberItem
 } = serialNumberItemSlice.actions

export default serialNumberItemSlice.reducer
