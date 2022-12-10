import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_CREATE_ORDER, API_GET_MY_ORDER, API_ORDER } from "../utils/api";
import { _getApi, _patchApi, _postApi } from "../utils/axios";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await _getApi(API_GET_MY_ORDER);
  return response.list;
});

export const ordersSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.products = action.meta.arg.products;
    });
  },
});

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (data) => {
    try {
      const response = await _postApi(API_CREATE_ORDER, data);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (data) => {
    try {
      await _patchApi(`${API_GET_MY_ORDER}`, data);
      return data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectMyOrder = (state) => state.orders;

export default ordersSlice.reducer;
