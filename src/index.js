import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./store";

import "./index.css";
import "./assets/css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  rootNode
);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
