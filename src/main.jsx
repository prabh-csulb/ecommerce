import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./store/index.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
