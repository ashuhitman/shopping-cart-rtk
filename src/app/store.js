import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cartReducer",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const shoppingStore = configureStore({
  reducer: {
    cart: persistedCartReducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const shoppingStorePersistor = persistStore(shoppingStore);

export default shoppingStore;
