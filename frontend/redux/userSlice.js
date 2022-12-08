import { USER_SLICE } from "../utils/const";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getApi, _patchApi, _postApi } from "../utils/axios";
import { API_CHANGE_PASSWORD, API_GET_USER } from "../utils/api";
import { Alert } from "react-native";

export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: {
    name: "lecongnam",
  },
  reducers: {
    clear: (state, action) => {
      return null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(editUserInfo.fulfilled, (state, action) => {
        return { ...state, ...action.meta.arg };
      });
  },
});

export default userSlice.reducer;

// export const { editInfo } = userSlice.actions;

export const fetchUserInfo = createAsyncThunk(
  "users/fetchUserInfo",
  async () => {
    try {
      const response = await _getApi(API_GET_USER);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const editUserInfo = createAsyncThunk(
  "users/editUserInfo",
  async (data) => {
    try {
      const response = await _patchApi(API_GET_USER, data);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const changePw = createAsyncThunk("users/changePw", async (data) => {
  try {
    const response = await _postApi(API_CHANGE_PASSWORD, data);
    return response.data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const selectCurrentUser = (state) => state.users;
