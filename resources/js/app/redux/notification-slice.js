import { createSlice } from '@reduxjs/toolkit'


export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    notification:{}
  },
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload
    },
    setNotification: (state, action) => {
        state.notification = action.payload
      },
  },
})
export const { 
    setNotifications,
    setNotification
 } = notificationSlice.actions

export default notificationSlice.reducer
