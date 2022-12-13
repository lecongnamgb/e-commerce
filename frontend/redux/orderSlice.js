import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_CREATE_ORDER, API_GET_MY_ORDER, API_ORDER } from "../utils/api";
import { _getApi, _patchApi, _postApi } from "../utils/axios";
import {
  STATE_CANCELED,
  STATE_DELIVERED,
  STATE_DELIVERING,
  STATE_WAITING,
} from "../utils/const";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await _getApi(API_GET_MY_ORDER);
  return response.list;
});

export const ordersSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    updateOrderByShopOwner: (state, action) => {
      const _id = action.payload._id;
      const value = action.payload.state;
      const item = state.find((item) => item._id === _id);
      if (item) {
        const idx = state.indexOf(item);
        const data = { ...state[idx], state: value };
        return [...state.slice(0, idx), data, ...state.slice(idx + 1)];
      } else {
        return state;
      }
    },
    deleteOrderByShopOwner: (state, action) => {
      const _id = action.payload;
      return state.filter((item) => item._id !== _id);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      const { _id, state: value } = action.meta.arg;
      const item = state.find((order) => order._id === _id);
      const idx = state.indexOf(item);
      return [
        ...state.slice(0, idx),
        { ...state[idx], state: value },
        ...state.slice(idx + 1),
      ];
    });
  },
});

export const { updateOrderByShopOwner, deleteOrderByShopOwner } =
  ordersSlice.actions;

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (data) => {
    try {
      const response = await _postApi(API_CREATE_ORDER, data);
      return response.list[0];
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (data) => {
    try {
      const { _id, ...updatedData } = data;
      const response = await _patchApi(
        `${API_CREATE_ORDER}/${_id}`,
        updatedData
      );
      return response;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectMyOrder = (state) => state.orders;

export const selectWaitingOrder = (state) =>
  state.orders.filter((order) => order?.state === STATE_WAITING) || [];
export const selectDeliveringOrder = (state) =>
  state.orders.filter((order) => order?.state === STATE_DELIVERING) || [];
export const selectDeliveredOrder = (state) =>
  state.orders.filter((order) => order?.state === STATE_DELIVERED) || [];
export const selectCanceledOrder = (state) =>
  state.orders.filter((order) => order?.state === STATE_CANCELED) || [];

export default ordersSlice.reducer;
