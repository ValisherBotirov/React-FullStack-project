import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginIm: false,
  user: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoading = true;
    },

    registerUser : (state) =>{
      state.isLoading = true
    }
  },
});

export const { loginUser,registerUser } = counterSlice.actions;
export default counterSlice.reducer;
