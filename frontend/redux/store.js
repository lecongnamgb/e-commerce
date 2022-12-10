import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import feedbacksSlice from "./feedBackSlice";
import notiSlice from "./notiSlice";
import orderSlice from "./orderSlice";
import productSlice from "./productSlice";
import shopOrdersSlice from "./shopOrderSlice";
import shopSlice from "./shopSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    notifications: notiSlice,
    users: userSlice,
    products: productSlice,
    shops: shopSlice,
    feedbacks: feedbacksSlice,
    carts: cartSlice,
    orders: orderSlice,
    shopOrders: shopOrdersSlice,
  },
});
