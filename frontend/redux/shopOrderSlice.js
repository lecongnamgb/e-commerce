import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_GET_MY_ORDER, API_GET_ORDER_OF_MY_SHOP } from "../utils/api";
import { _getApi, _patchApi } from "../utils/axios";

export const fetchShopOrders = createAsyncThunk(
  "shopOrders/fetchShopOrders",
  async (id) => {
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
      //   state.products = action.meta.arg.products;
    });
  },
});

export const updateShopOrder = createAsyncThunk(
  "shopOrders/updateShopOrder",
  async (data) => {
    try {
      await _patchApi(`${API_GET_MY_ORDER}`, data);
      return data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectShopOrders = (state) => state.shopOrders;

export default shopOrdersSlice.reducer;
