import { createSlice } from "@reduxjs/toolkit";

const state = { userId: null, nickName: null, stateChange: false };

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducer: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: (state, { payload }) => state,
  },
});

console.log("authSlice: ", authSlice);
