import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRegister from "../../api/asyncRegister";
import apiForgotPassword from "../../api/asyncForgotPassword";
import apiCreatePin from "../../api/asyncCreatePin";

const initialState = {
  registerUser: [],
  lastId: 0,
  isLoading: false,
  successMsg: null,
  error: {
    userRegister: null,
    userForgotPassword: null,
    userChangePassword: null,
  },
  status: {
    userRegister: {
      isPending: false,
      isFulfilled: false,
      isRejected: false,
    },
    userForgotPassword: {
      isPending: false,
      isFulfilled: false,
      isRejected: false,
    },
    userCreatePin: {
      isPending: false,
      isFulfilled: false,
      isRejected: false,
    },
  },
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
    return builder
      .addAsyncThunk(registerUser, {
        pending: (prevState) => {
          prevState.status.userRegister.isPending = true;
          prevState.status.userRegister.isFulfilled = false;
          prevState.status.userRegister.isRejected = false;
          prevState.isLoading = true;
        },
        fulfilled: (prevState, action) => {
          prevState.status.userRegister.isPending = false;
          prevState.status.userRegister.isFulfilled = true;
          prevState.isLoading = false;
          prevState.registerUser.push(action.payload);
          prevState.lastId++;
          prevState.successMsg = `Register success , Welcome ${action.payload?.username}`;
        },
        rejected: (prevState, action) => {
          prevState.status.userRegister.isPending = false;
          prevState.status.userRegister.isRejected = true;
          prevState.error.userRegister = action.payload;
        },
      })
      .addAsyncThunk(forgotPasswordUser, {
        pending: (prevState) => {
          prevState.status.userForgotPassword.isPending = true;
          prevState.status.userForgotPassword.isFulfilled = false;
          prevState.status.userForgotPassword.isRejected = false;
          prevState.isLoading = true;
        },
        fulfilled: (prevState, action) => {
          prevState.status.userForgotPassword.isPending = false;
          prevState.status.userForgotPassword.isFulfilled = true;
          prevState.isLoading = false;
          const idx = prevState.registerUser.findIndex(
            (u) => u.email === action.payload.email,
          );
          prevState.registerUser[idx] = action.payload;
          prevState.successMsg = `Email sending to ${action.payload?.email}`;
        },
        rejected: (prevState) => {
          prevState.status.userForgotPassword.isPending = false;
          prevState.status.userForgotPassword.isRejected = true;
        },
      })
      .addAsyncThunk(createPinUser, {
        pending: (prevState) => {
          prevState.status.userForgotPassword.isPending = true;
          prevState.status.userForgotPassword.isFulfilled = false;
          prevState.status.userForgotPassword.isRejected = false;
          prevState.isLoading = true;
        },
        fulfilled: (prevState, action) => {
          prevState.status.userForgotPassword.isPending = false;
          prevState.status.userForgotPassword.isFulfilled = true;
          prevState.isLoading = false;
          const idx = prevState.registerUser.findIndex(
            (u) => u.email === action.payload.email,
          );
          prevState.registerUser[idx] = action.payload;
          prevState.successMsg = `Email sending to ${action.payload?.email}`;
        },
        rejected: (prevState) => {
          prevState.status.userForgotPassword.isPending = false;
          prevState.status.userForgotPassword.isRejected = true;
        },
      });
  },
});

export const registerActions = {
  ...registerSlice.actions,
  registerUser,
  forgotPasswordUser,
  createPinUser,
};

export default registerSlice.reducer;
