import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import 'sweetalert2/dist/sweetalert2.min.css'
import "react-datetime/css/react-datetime.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
