import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getApi } from "../utils/axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await _getApi();
    return response.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {},
  reducers: {},
});
