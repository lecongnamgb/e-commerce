import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_GET_LIST_SHOP } from "../utils/api";
import { _getApi, _patchApi, _postApi } from "../utils/axios";

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
      state.push(action.payload);
    });
    builder.addCase(updateShop.fulfilled, (state, action) => {
      const { _id } = action.meta.arg;
      const updatedItem = state.find((prd) => prd._id === _id);

      const idx = state.indexOf(updatedItem);
      return [...state.slice(0, idx), action.meta.arg, ...state.slice(idx + 1)];
    });
  },
});

export const createShop = createAsyncThunk("shops/createShop", async (data) => {
  try {
    const { owner, ...createData } = data;
    const response = await _postApi(API_GET_LIST_SHOP, createData);
    return response.data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const updateShop = createAsyncThunk("shops/updateShop", async (data) => {
  try {
    const id = data._id;
    await _patchApi(`${API_GET_LIST_SHOP}/${id}`, data);
    return data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const selectShopById = (state, _id) => {
  return state.shops.find((shop) => shop._id === _id);
};

export const selectShopByOwnerId = (state, ownerId) => {
  return state.shops.find((shop) => shop?.owner?._id === ownerId);
};

export default shopsSlice.reducer;
