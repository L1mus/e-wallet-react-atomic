import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import env from "../utils/environment";

import loginReducer from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";

const persistConfig = {
  key: "ew-DB",
  storage,
  whitelist: ["loginReducer", "registerReducer"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  loginReducer,
  registerReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  devTools: env.environment === "development",
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
export default store;
