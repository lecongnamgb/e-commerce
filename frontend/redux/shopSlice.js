import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GET_LIST_PRODUCT, API_GET_LIST_SHOP } from "../utils/api";
import { _getApi } from "../utils/axios";

export const fetchShops = createAsyncThunk("shops/fetchShops", async () => {
  const response = await _getApi(API_GET_LIST_SHOP);
  return response.data;
});

export const shopsSlice = createSlice({
  name: "shop",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchShops.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectShopById = (state, _id) =>
  state.shops.find((shop) => shop._id === _id);

export default shopsSlice.reducer;
