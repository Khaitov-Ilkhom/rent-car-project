import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
}

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null
      localStorage.removeItem("token");
    },
    signIn: (state, action) => {
      const user = JSON.parse(atob(action.payload.token.split('.')[1]));
      state.user = user
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    signUp: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", action.payload);
    }
  }
})

export const {reducer} = authSlice;
export const {logOut, signIn, signUp} = authSlice.actions;