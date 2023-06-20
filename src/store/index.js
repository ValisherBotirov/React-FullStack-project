import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../reducers/auth";
import articleReducer from "../reducers/article"
export default configureStore({
  reducer: {
    auth :authReducer,
    articles:articleReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
