import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GET_LIST_PRODUCT, API_GET_LIST_SHOP } from "../utils/api";
import { _getApi, _postApi } from "../utils/axios";
import { Alert } from "react-native";

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
    builder.addCase(createShop.fulfilled, (state, action) => {
      return { ...state, ...action.meta.arg };
    });
  },
});

export const createShop = createAsyncThunk("shops/createShop", async (data) => {
  try {
    const response = await _postApi(API_GET_LIST_SHOP, data);
    return response.data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const selectShopById = (state, _id) =>
  state.shops.find((shop) => shop._id === _id);

export const selectShopByOwnerId = (state, ownerId) => {
  return state?.shops?.find((shop) => {
    return shop?.owner?._id == ownerId;
  });
};

export default shopsSlice.reducer;
