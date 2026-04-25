import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLogin from "../../api/asyncLogin";

/**
 * Redux slice for managing login authentication status.
 * * @typedef {Object} LoginState
 * @property {Object|null} loginUser - Profile data of the currently logged-in user.
 * @property {boolean} isLogin - Status indicating if a user session is active.
 * @property {boolean} isLoading - Status for ongoing login API requests.
 * @property {string|null} error - Error message if the login attempt fails.
 * @property {string} successMsg - Success feedback message after a successful login.
 */

const initialState = {
  loginUser: null,
  isLogin: false,
  isLoading: false,
  error: null,
  successMsg: "",
};
const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await apiLogin(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const loginSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    logoutUser: (prevState) => {
      return {
        ...prevState,
        loginUser: null,
        isLogin: false,
      };
    },
    clearError: (prevState) => {
      return {
        ...prevState,
        error: null,
      };
    },
    updateUserPin: (state, action) => {
      if (state.loginUser) {
        state.loginUser.pin = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMsg = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.loginUser = action.payload;
        state.successMsg = "Login Success";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const loginActions = {
  ...loginSlice.actions,
  loginUser,
};

export default loginSlice.reducer;
