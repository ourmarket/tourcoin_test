import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice";
import balanceReducer from "./balanceSlice";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    alliances: mapReducer,
    balance: balanceReducer,
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
