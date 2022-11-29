import { configureStore } from "@reduxjs/toolkit";
import notiSlice from "./notiSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    notifications: notiSlice,
    users: userSlice,
  },
});
