import { createSlice } from "@reduxjs/toolkit";

export const suggesterSlice = createSlice({
  name: "suggester",
  initialState: [],
  reducers: {
    clearAndAddSuggester: (state, action) => {
      state = action.payload;
    },
  },
});

export default suggesterSlice.reducer;

export const { clearAndAddSuggester } = suggesterSlice.actions;

export const selectAllSuggester =
  ((state) => {
    return state.suggests;
  }) || [];
