import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    addCounter: (state) => {
      state.count += 1;
    },

    removeCounter: (state) => {
      state.count -= 1;
    },

    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const { addCounter, removeCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
