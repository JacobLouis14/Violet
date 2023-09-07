import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/user";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
