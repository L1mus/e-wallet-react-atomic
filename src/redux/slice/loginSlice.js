import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLogin from "../../api/asyncLogin";

const initialState = {
  loginUser: {},
  isLogin: false,
  isLoading: false,
  error: null,
  successMsg: "",
  status: {
    userLogin: {
      isPending: false,
      isFulfilled: false,
      isRejected: false,
    },
  },
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
        loginUser: {},
        isLogin: false,
      };
    },
    clearError: (prevState) => {
      return {
        ...prevState,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(loginUser, {
      pending: (prevState) => {
        prevState.status.userLogin.isPending = true;
        prevState.status.userLogin.isFulfilled = false;
        prevState.status.userLogin.isRejected = false;
        prevState.isLoading = true;
      },
      fulfilled: (prevState, action) => {
        prevState.status.userLogin.isPending = false;
        prevState.status.userLogin.isFulfilled = true;
        prevState.loginUser = action.payload;
        prevState.isLogin = true;
        prevState.isLoading = false;
        prevState.successMsg = "Login Succes";
      },
      rejected: (prevState, action) => {
        prevState.status.userLogin.isPending = false;
        prevState.status.userLogin.isRejected = true;
        prevState.error = action.payload;
        prevState.successMsg = null;
      },
    });
  },
});

export const loginActions = {
  ...loginSlice.actions,
  loginUser,
};

export default loginSlice.reducer;
