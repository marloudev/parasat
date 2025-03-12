import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isModalOpen: false,
    pathname: '/' + window.location.pathname.split("/")[2],
    sidebarOpen: false,
    user: {},
    users: []
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setPathname: (state, action) => {
      state.pathname = action.payload
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload ?? !state.sidebarOpen;
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
  },
})
export const {
  setPathname,
  setSidebarOpen,
  setUser,
  setUsers
} = appSlice.actions

export default appSlice.reducer
