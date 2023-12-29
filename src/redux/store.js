import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import cartReducer from "./Cart/cartReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shopReducer";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});
const middleware = applyMiddleware(thunk, logger); // Apply Redux Thunk middleware

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);

export let persistor = persistStore(store);
