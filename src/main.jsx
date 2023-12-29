import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import shoppingStore, { shoppingStorePersistor } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={shoppingStore}>
      <PersistGate loading={null} persistor={shoppingStorePersistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
