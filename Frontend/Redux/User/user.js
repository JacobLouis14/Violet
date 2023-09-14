import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userValue: null,
  },
  reducers: {
    login: (state, action) => {
      state.userValue = action.payload;
    },
    logout: (state) => {
      state.userValue = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
