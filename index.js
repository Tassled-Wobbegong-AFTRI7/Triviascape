import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App.jsx";

import { Provider } from "react-redux";
import store from "./client/store";
import styles from './styles.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
