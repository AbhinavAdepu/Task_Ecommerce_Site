import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import CartItems from "./components/CartItems";
import store from "./store";
import { Provider } from "react-redux";
import BuyNow from "./components/BuyNow";
import MyOrders from "./components/MyOrders";

const routing = (
  <Router>
    <div>
      <Provider store={store}>
        <Route exact path="/" component={App} />
        <Route path="/MyOrders" component={MyOrders} />
        <Route path="/MyCart" component={CartItems} />
        <Route path="/BuyNow" component={BuyNow} />
      </Provider>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
