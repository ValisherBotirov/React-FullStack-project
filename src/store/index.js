import { configureStore } from "@reduxjs/toolkit";

import counterReduser from "../reducers/count";
export default configureStore({
  reducer: counterReduser,
  devTools: process.env.NODE_ENV !== "production",
});
