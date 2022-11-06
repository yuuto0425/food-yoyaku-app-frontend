import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    userLogout :(state , action) => {
      state.user = action.payload;
      state.isFetching =false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    userLogoutStart: (state) => {
      state.isFetching = false;
    },
    userLogoutSuccess: (state) => {
      state.user = null;
    },
    userLogoutFailure: (state) => {
      state.isFetching = true;
      state.error = true;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  userLogoutSuccess,
  userLogoutStart,
  userLogoutFailure,
  userLogout
} = userSlice.actions;
//apiCalls
export default userSlice.reducer;
//store
