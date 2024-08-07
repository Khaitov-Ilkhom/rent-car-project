import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("auth-token") || null,
}

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null
      localStorage.removeItem("token");
    },
    singIn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    signUp: (state, action) => {
      state.user = action.payload;
    }
  }
})

export const {reducer} = authSlice;
export const {logOut, singIn, signUp} = authSlice.actions;