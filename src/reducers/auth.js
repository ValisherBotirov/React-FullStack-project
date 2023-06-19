import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginIn: false,
  error: null,
  user: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {

    signInUser: (state) => {
      state.isLoading = true;
    },

    signInSuccess: (state,action) => {
      state.loginIn = true;
      state.isLoading = false;
      state.user = action.payload
      localStorage.setItem("token",action.payload.token)
    },

    signInFailed: (state) => {
      state.loginIn = false;
      state.error = "error";
      state.isLoading = false
    },
  },
});

export const { loginUser, signInUser, signInSuccess, signInFailed } =
  counterSlice.actions;
export default counterSlice.reducer;
