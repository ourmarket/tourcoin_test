import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice";
import balanceReducer from "./balanceSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    alliances: mapReducer,
    balance: balanceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
