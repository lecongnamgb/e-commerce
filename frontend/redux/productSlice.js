import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_GET_LIST_PRODUCT } from "../utils/api";
import { _deleteApi, _getApi, _patchApi, _postApi } from "../utils/axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await _getApi(API_GET_LIST_PRODUCT);

      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state = state.concat(action.meta.arg);
      return state;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {});
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const id = action.meta.arg;
      const deletedItem = state.find((prd) => prd._id === id);
      const idx = state.indexOf(deletedItem);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    });
  },
});

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    try {
      const response = await _postApi(API_GET_LIST_PRODUCT, data);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (id, data) => {
    try {
      const response = await _patchApi(`${API_GET_LIST_PRODUCT}/${id}`, data);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const response = await _deleteApi(`${API_GET_LIST_PRODUCT}/${id}`);
      return response.data;
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }
);

export const selectAllProducts = (state) => state.products;

export const selectProductByShopId = (state, shop_id) =>
  state.products.filter((prd) => prd.shop._id === shop_id);

export const selectProductById = (state, _id) =>
  state.products.find((prd) => prd._id === _id);

export default productSlice.reducer;
