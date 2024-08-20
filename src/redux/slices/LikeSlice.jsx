import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  likedCars: JSON.parse(localStorage.getItem("liked")) || [],
};


const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const carIndex = state.likedCars.findIndex((car) => car._id === action.payload._id);

      if (carIndex === -1) {
        state.likedCars.push(action.payload);
      } else {
        state.likedCars = state.likedCars.filter((car) => car._id !== action.payload._id);
      }

      localStorage.setItem("liked", JSON.stringify(state.likedCars));
    },
    removeFromLiked: (state, action) => {
      state.likedCars = state.likedCars.filter((car) => car._id !== action.payload);
      localStorage.setItem("liked", JSON.stringify(state.likedCars));
    },
  },
});

export const {reducer} = likeSlice;
export const {addToLiked, removeFromLiked} = likeSlice.actions;