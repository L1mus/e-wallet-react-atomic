import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRegister from "../../api/asyncRegister";

const initialState = {
  registerUser: [],
  isLoading: false,
  successMsg: null,
  error: {
    userRegister: null,
    userChangePassword: null,
  },
  status: {
    userRegister: {
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
      rejectWithValue(error);
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
    return builder.addAsyncThunk(registerUser, {
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
        prevState.successMsg = `Register success , Welcome ${action.payload?.email}`;
      },
      rejected: (prevState, action) => {
        prevState.status.userRegister.isPending = false;
        prevState.status.userRegister.isRejected = true;
        prevState.error.userRegister = action.payload;
      },
    });
  },
});

export const registerActions = {
  ...registerSlice.actions,
  registerUser,
};

export default registerSlice.reducer;
