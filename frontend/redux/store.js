import { configureStore } from "@reduxjs/toolkit";
import feedbacksSlice from "./feedBackSlice";
import notiSlice from "./notiSlice";
import productSlice from "./productSlice";
import shopSlice from "./shopSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    notifications: notiSlice,
    users: userSlice,
    products: productSlice,
    shops: shopSlice,
    feedbacks: feedbacksSlice,
  },
});
