import { applyMiddleware, legacy_createStore as createStore } from "redux";
import cartReducer from "./Cart/cartReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

// const store = createStore(
//   cartReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
