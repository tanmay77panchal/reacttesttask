import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null
}

export const loggedUserSlice = createSlice({
  name: 'localUser',
  initialState,
  reducers: {
    setData: (state = initialState, action) => {
      state.data = action.payload.data
    },
  },
})


export const { setData } = loggedUserSlice.actions

export default loggedUserSlice.reducer