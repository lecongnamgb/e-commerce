import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_CREATE_ORDER, API_FEEDBACK } from "../utils/api";
import { _deleteApi, _getApi, _patchApi, _postApi } from "../utils/axios";

export const fetchFeedbacks = createAsyncThunk(
  "feedBacks/fetchFeedBacks",
  async () => {
    try {
      const response = await _getApi(API_FEEDBACK);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const feedbacksSlice = createSlice({
  name: "feedBack",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFeedbacks.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateFeedback.fulfilled, (state, action) => {
      const { _id } = action.payload;
      const value = action.payload.state;
      const item = state.find((item) => item._id === _id);
      const idx = state.indexOf(item);
      const data = { ...state[idx], state: value };
      return [...state.slice(0, idx), data, ...state.slice(idx + 1)];
    });
    builder.addCase(deleteFeedback.fulfilled, (state, action) => {
      const _id = action.meta.arg;
      return state.filter((item) => item._id !== _id);
    });
    builder.addCase(createFeedback.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const createFeedback = createAsyncThunk(
  "feedBacks/createFeedBack",
  async (data) => {
    try {
      const response = await _postApi(API_FEEDBACK, data);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const updateFeedback = createAsyncThunk(
  "feedBacks/updateFeedBack",
  async (data) => {
    try {
      const { _id, ...updatedData } = data;
      const response = await _patchApi(
        `${API_CREATE_ORDER}/${_id}`,
        updatedData
      );
      return data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  "feedBacks/deleteFeedBack",
  async (_id) => {
    try {
      const response = await _deleteApi(`${API_FEEDBACK}/${_id}`);
      return response;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectFeedbackByProductId = (state, _id) =>
  state.feedbacks.filter((feedback) => feedback?.product?._id === _id) || [];

export const selectFeedBackByUserId = (state, _id) =>
  state.feedbacks.filter((feedback) => feedback?.user?._id === _id) || [];

export default feedbacksSlice.reducer;
