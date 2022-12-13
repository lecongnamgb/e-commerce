import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_CREATE_ORDER, API_GET_ORDER_OF_MY_SHOP } from "../utils/api";
import { _deleteApi, _getApi, _patchApi } from "../utils/axios";

export const fetchShopOrders = createAsyncThunk(
  "shopOrders/fetchShopOrders",
  async () => {
    try {
      const response = await _getApi(API_GET_ORDER_OF_MY_SHOP);
      console.log("response:", response);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const shopOrdersSlice = createSlice({
  name: "shopOrder",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchShopOrders.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateShopOrder.fulfilled, (state, action) => {
      const { _id } = action.payload;
      const value = action.payload.state;
      const item = state.find((item) => item._id === _id);
      const idx = state.indexOf(item);
      const data = { ...state[idx], state: value };
      return [...state.slice(0, idx), data, ...state.slice(idx + 1)];
    });
    builder.addCase(deleteShopOrder.fulfilled, (state, action) => {
      const _id = action.meta.arg;
      return state.filter((item) => item._id !== _id);
    });
  },
});

export const updateShopOrder = createAsyncThunk(
  "shopOrders/updateShopOrder",
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

export const deleteShopOrder = createAsyncThunk(
  "shopOrders/deleteShopOrder",
  async (_id) => {
    try {
      const response = await _deleteApi(`${API_CREATE_ORDER}/${_id}`);
      return response;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectShopOrders = (state) => state.shopOrders;

export default shopOrdersSlice.reducer;
