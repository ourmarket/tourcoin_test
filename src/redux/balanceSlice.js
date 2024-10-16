// redux/balanceSlice.js
import { decimalLimit } from "@/utils/decimalLimit";
import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    TRCPrice: 0,
    BNBPrice: 0,
    amountBNB: 0,
    amountTRC: 0,
    errorBalance: null,
    isLoading: false,
  },
  reducers: {
    setTRCPrice(state, action) {
      console.log(+action.payload);
      state.TRCPrice = +action.payload;
    },
    setBNBPrice(state, action) {
      state.BNBPrice = +action.payload;
    },
    setAmountBNB(state, action) {
      state.amountBNB = decimalLimit(+action.payload);
    },
    setAmountTRC(state, action) {
      state.amountTRC = decimalLimit(+action.payload);
    },
    setErrorBalance(state, action) {
      state.errorBalance = action.payload;
    },
    setIsLoadingBalance(state, action) {
      state.isLoading = action.payload;
    },

    clearBalances(state) {
      state.TRCPrice = 0;
      state.BNBPrice = 0;
      state.amountBNB = 0;
      state.amountTRC = 0;
      state.errorBalance = null;
      state.isLoading = null;
    },
  },
});

export const {
  setErrorBalance,
  clearBalances,
  setAmountBNB,
  setAmountTRC,
  setIsLoadingBalance,
  setTRCPrice,
  setBNBPrice,
} = balanceSlice.actions;

export default balanceSlice.reducer;
