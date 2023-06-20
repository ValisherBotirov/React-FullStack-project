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
      localStorage.setItem("isLogin",state.loginIn)
    },

    signInFailed: (state) => {
      state.loginIn = false;
      state.error = "error";
      state.isLoading = false
    },

    logout : (state)=>{
      state.user = null;
      state.loginIn  = false
      localStorage.removeItem("token")
      localStorage.removeItem("isLogin")
    }

  },
});

export const { logout, signInUser, signInSuccess, signInFailed } =
  counterSlice.actions;
export default counterSlice.reducer;
