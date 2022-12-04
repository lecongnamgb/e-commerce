import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_FEEDBACK } from "../utils/api";
import { _getApi } from "../utils/axios";

export const fetchFeedbacks = createAsyncThunk(
  "feedbacks/fetchFeedbacks",
  async () => {
    const response = await _getApi(API_FEEDBACK);
    return response.data;
  }
);

export const feedbacksSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFeedbacks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectFeedbackByProductId = (state, _id) =>
  state.feedbacks.find((feedback) => feedback._id === _id);

export default feedbacksSlice.reducer;
