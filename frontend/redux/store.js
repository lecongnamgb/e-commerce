import { configureStore } from "@reduxjs/toolkit";
import notiSlice from "./notiSlice";

export default configureStore({
  reducer: {
    notifications: notiSlice,
  },
});
