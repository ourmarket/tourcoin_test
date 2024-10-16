/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  token:
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null,
  refreshToken:
    typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null,
  isAuthenticated: !!localStorage.getItem("authToken"),
  authProcess: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthProcess: (state, action) => {
      state.authProcess = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.address = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.authProcess = false;
      state.error = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const {
  setAddress,
  setAuthProcess,
  setToken,
  setRefreshToken,
  setIsAuthenticated,
  clearAuth,
  setError,
} = authSlice.actions;

export default authSlice.reducer;
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  authProcess: false,
  error: null,
};

// Verificar si estamos en el cliente y recuperar los datos de localStorage
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  initialState.token = token;
  initialState.refreshToken = refreshToken;
  initialState.isAuthenticated = !!token;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload);
      }
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("refreshToken", action.payload);
      }
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthProcess: (state, action) => {
      state.authProcess = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.address = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.authProcess = false;
      state.error = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      }
    },
  },
});

export const {
  setAddress,
  setAuthProcess,
  setToken,
  setRefreshToken,
  setIsAuthenticated,
  clearAuth,
  setError,
} = authSlice.actions;

export default authSlice.reducer;
