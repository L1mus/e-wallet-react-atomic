import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRegister from "../../api/asyncRegister";
import apiForgotPassword from "../../api/asyncForgotPassword";
import apiCreatePin from "../../api/asyncCreatePin";

/**
 * Redux slice for managing registration and account recovery (forgot password, PIN creation).
 * * @typedef {Object} RegisterState
 * @property {Array} registerUser - List of registered users (Mock Database).
 * @property {number} lastId - The last used ID for generating new registrations.
 * @property {boolean} isLoading - Status for ongoing asynchronous operations.
 * @property {string|null} successMsg - Success feedback message.
 * @property {string|null} error - Centralized error message object.
 */

const initialState = {
  registerUser: [],
  lastId: 0,
  isLoading: false,
  successMsg: null,
  error: null,
};

const registerUser = createAsyncThunk(
  "authRegister/registerUser ",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await apiRegister(payload);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const forgotPasswordUser = createAsyncThunk(
  "authRegister/forgotPasswordUser",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await apiForgotPassword(payload);
      const newData = { ...data, password: 12345678 };
      return newData;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const createPinUser = createAsyncThunk(
  "authRegister/createPinUser",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await apiCreatePin(payload);
      const newData = { ...data, password: 12345678 };
      return newData;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const registerSlice = createSlice({
  name: "authRegister",
  initialState,
  reducers: {
    clearError: (prevState) => {
      return {
        ...prevState,
        error: initialState.error,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // registerUser
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerUser.push(action.payload);
        state.lastId++;
        state.successMsg = `Register success, Welcome ${action.payload?.username}`;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // forgotPasswordUser
      .addCase(forgotPasswordUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.registerUser.findIndex(
          (u) => u.email === action.payload.email,
        );
        if (idx !== -1) {
          state.registerUser[idx] = {
            ...state.registerUser[idx],
            ...action.payload,
          };
        }
        state.successMsg = `Email sending to ${action.payload?.email}`;
      })
      // Create PIN
      .addCase(createPinUser.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.registerUser.findIndex(
          (u) => u.email === action.payload.email,
        );
        if (idx !== -1) {
          state.registerUser[idx] = {
            ...state.registerUser[idx],
            pin: action.payload.pin,
          };
        }
        state.successMsg = "PIN created successfully";
      })
      .addMatcher(
        (action) =>
          action.type.startsWith("authRegister/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
          state.successMsg = null;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("authRegister/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const registerActions = {
  ...registerSlice.actions,
  registerUser,
  forgotPasswordUser,
  createPinUser,
};

export default registerSlice.reducer;
