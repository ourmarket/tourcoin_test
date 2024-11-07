import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    fullMap: false,
  },
  reducers: {
    toggleMap(state) {
      state.fullMap = !state.fullMap;
    },
  },
});

export const { toggleMap } = uiSlice.actions;

export default uiSlice.reducer;
