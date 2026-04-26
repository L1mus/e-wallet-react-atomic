import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiTransfer from "../../api/asyncTransfer";
import apiTopUp from "../../api/asyncTopup";

/**
 * Redux slice for managing transaction data (Transfers & Top-Ups).
 * @typedef {Object} TransactionState
 * @property {Array} transactions History of all user transactions.
 * @property {Object|null} currentTransaction Data for the transaction that was just processed.
 * @property {boolean} isLoading  Status of the currently running asynchronous process.
 * @property {string|null} error Error message if a transaction fails.
 * @property {string|null} successMsg Success message after a transaction succeeds.
 */

const initialState = {
  transactions: [],
  currentTransaction: null,
  isLoading: false,
  error: null,
  successMsg: null,
};

/**
 * Thunk: Transfer money to another user.
 * Requires sender data from getState() for balance validation,
 * so the balance does not need to be passed manually from the component.
 */
const transfer = createAsyncThunk(
  "transaction/transfer",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { loginReducer } = getState();
      const sender = loginReducer.loginUser;

      const data = await apiTransfer({
        senderId: sender.id,
        senderBalance: sender.balance,
        receiverId: payload.receiverId,
        receiverNameSnapshot: payload.receiverName,
        receiverPhoneSnapshot: payload.receiverPhone,
        profilePicture: payload.profilePicture,
        amount: payload.amount,
        notes: payload.notes,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

/**
 * Thunk: Top up e-wallet balance.
 * Reads the balance and user data from getState() to ensure consistency
 * with the data currently active in the login session.
 */
const topUp = createAsyncThunk(
  "transaction/topUp",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { loginReducer } = getState();
      const currentUser = loginReducer.loginUser;

      const data = await apiTopUp({
        userId: currentUser.id,
        usernameSnapshot: currentUser.username,
        profilePicture: currentUser.profilePicture,
        currentBalance: currentUser.balance,
        amount: payload.amount,
        paymentMethod: payload.paymentMethod,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearCurrentTransaction: (state) => {
      state.currentTransaction = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (tx) => tx.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      //Transfer
      .addCase(transfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.unshift(action.payload.transaction);
        state.currentTransaction = action.payload.transaction;
        state.successMsg = "Transfer successful!";
      })

      // TopUp
      .addCase(topUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.unshift(action.payload.transaction);
        state.currentTransaction = action.payload.transaction;
        state.successMsg = "Top-up successful!";
      })

      //shared pending & rejected via addMatcher
      .addMatcher(
        (action) =>
          action.type.startsWith("transaction/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
          state.successMsg = null;
        },
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("transaction/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const transactionActions = {
  ...transactionSlice.actions,
  transfer,
  topUp,
};

export default transactionSlice.reducer;
