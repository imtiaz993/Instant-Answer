import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {value:{}},
  reducers: {
    updateUser: (state, action) => {
      state.value = { ...action.payload.user };
    },
  },
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
