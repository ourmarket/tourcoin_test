/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "alliances",
  initialState: {
    alliances: [],
    alliancesDisplay: [],
  },
  reducers: {
    setAlliances: (state, action) => {
      state.alliances = [...action.payload];
      state.alliancesDisplay = [...action.payload];
    },
    setActive: (state, action) => {
      console.log(action.payload);
      const allianceId = action.payload;
      const alliance = state.alliancesDisplay.find(
        (alliance) => alliance.allianceId === allianceId
      );
      if (alliance) {
        alliance.active = true;
      }
    },
    setInActive: (state, action) => {
      const allianceId = action.payload;
      const alliance = state.alliancesDisplay.find(
        (alliance) => alliance.allianceId === allianceId
      );
      if (alliance) {
        alliance.active = false;
      }
    },
    setCategory: (state, action) => {
      const category = action.payload.category;
      state.alliancesDisplay = state.alliances.filter(
        (alliance) => alliance.category === category
      );
    },
    setCategoryTRC: (state) => {
      state.alliancesDisplay = state.alliances.filter(
        (alliance) => alliance.accept_TRC
      );
    },
    setCategoryAll: (state, action) => {
      state.alliancesDisplay = state.alliances;
    },
    clearAlliances: (state) => {
      state.alliancesDisplay = [];
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
  setCategoryTRC,
} = mapSlice.actions;
export default mapSlice.reducer;
