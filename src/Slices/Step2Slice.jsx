import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: {},
};

export const counterSlice = createSlice({
  name: "PlanCounter",
  initialState,
  reducers: {
    UserPlan: (state, action) => {
      state.plan = action.payload;
    },
    UserPlanReset: () => initialState
  },
});

// Action creators are generated for each case reducer function
export const { UserPlan, UserPlanReset } = counterSlice.actions;
export default counterSlice.reducer;
