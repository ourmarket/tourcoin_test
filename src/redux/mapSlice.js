/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "alliances",
  initialState: {
    alliances: [],
  },
  reducers: {
    setAlliances: (state, action) => {
      state.alliances = [...action.payload];
    },
    setActive: (state, action) => {
      console.log(action.payload);
      const allianceId = action.payload;
      const alliance = state.alliances.find(
        (alliance) => alliance.allianceId === allianceId
      );
      if (alliance) {
        alliance.active = true;
      }
    },
    setInActive: (state, action) => {
      const allianceId = action.payload;
      const alliance = state.alliances.find(
        (alliance) => alliance.allianceId === allianceId
      );
      if (alliance) {
        alliance.active = false;
      }
    },
    setCategory: (state, action) => {
      const category = action.payload.category;
      state.alliances = action.payload.data.filter(
        (alliance) => alliance.category === category
      );
    },
    setCategoryAll: (state, action) => {
      state.alliances = [...action.payload];
    },
    clearAlliances: (state) => {
      state.alliances = [];
    },
  },
});

export const {
  setAlliances,
  setActive,
  setInActive,
  setCategory,
  setCategoryAll,
  clearAlliances,
} = mapSlice.actions;
export default mapSlice.reducer;
