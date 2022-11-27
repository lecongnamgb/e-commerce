import { createSlice } from "@reduxjs/toolkit";

export const notiSlice = createSlice({
  name: "notification",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    clear: (state) => {
      return { ...state, value: 0 };
    },
  },
});

export const { increment, decrement, clear } = notiSlice.actions;

export const selectNumOfNoti = (state) => state.notifications.value;

export default notiSlice.reducer;
