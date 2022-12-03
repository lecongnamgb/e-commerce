import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GET_LIST_PRODUCT } from "../utils/api";
import { _getApi } from "../utils/axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await _getApi(API_GET_LIST_PRODUCT);
    console.log("response:", response.data);
    return response.data;
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
  },
});

export const selectAllProducts = (state) => state.products;

export const selectProductById = (state, _id) =>
  state.products.find((prd) => prd._id === _id);

export default productSlice.reducer;
