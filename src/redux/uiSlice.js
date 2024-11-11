import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    fullMap: false,
    fullMapDetail: false,
  },
  reducers: {
    toggleMap(state) {
      state.fullMap = !state.fullMap;
    },
    toggleMapDetail(state) {
      state.fullMapDetail = !state.fullMapDetail;
    },
    activeMapDetail(state) {
      state.fullMapDetail = true;
    },
    inactiveMapDetail(state) {
      state.fullMapDetail = false;
    },
  },
});

export const {
  toggleMap,
  toggleMapDetail,
  activeMapDetail,
  inactiveMapDetail,
} = uiSlice.actions;

export default uiSlice.reducer;
