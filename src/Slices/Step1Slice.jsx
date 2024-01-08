import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name : "",
  email: "",
  phone: "",
}

export const counterSlice = createSlice({
  name: 'UserCounter',
  initialState,
  reducers: {
    UserDetails: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
    },
    UserDetailsReset: () => initialState
  },
})

// Action creators are generated for each case reducer function
export const { UserDetails, UserDetailsReset } = counterSlice.actions

export default counterSlice.reducer