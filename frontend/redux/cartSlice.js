import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { API_CART } from "../utils/api";
import { _getApi, _patchApi, _postApi } from "../utils/axios";

export const fetchCarts = createAsyncThunk("carts/fetchCarts", async () => {
  const response = await _getApi(API_CART);
  return response.data[0];
});

export const cartsSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    clearCart: (state, action) => {
      return {};
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.products = action.meta.arg.products;
    });
  },
});

export const createCart = createAsyncThunk("carts/createCart", async (data) => {
  try {
    const { owner, ...createData } = data;
    const response = await _postApi(API_CART, createData);
    return response.data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const { clearCart } = cartsSlice.actions;

export const updateCart = createAsyncThunk("carts/updateCart", async (data) => {
  try {
    await _patchApi(`${API_CART}`, data);
    return data;
  } catch (err) {
    Alert.alert("Oops!", err.message);
  }
});

export const selectCurrentCart = (state) => {
  return state.carts;
};

export default cartsSlice.reducer;
