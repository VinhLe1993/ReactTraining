import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Setup Redux
import { store } from "./redux/configStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
