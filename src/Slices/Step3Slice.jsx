import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addOns: [],
};

export const counterSlice = createSlice({
  name: "AddOnCounter",
  initialState,
  reducers: {
    UserAddOns: (state, action) => {
      state.addOns = action.payload;
    },
    UserAddOnsReset: () => initialState

  },
});

// Action creators are generated for each case reducer function
export const { UserAddOns, UserAddOnsReset } = counterSlice.actions;
export default counterSlice.reducer;
