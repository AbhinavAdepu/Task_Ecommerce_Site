import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const selectedItem = localStorage.getItem("selectedItem")
  ? JSON.parse(localStorage.getItem("selectedItem"))
  : [];
const selectedItemz = { selectedItem: { product: { ...selectedItem } } };
console.log(selectedItemz);
const initState = { cart: { items: cartItems }, selectedItem: selectedItemz };
console.log(initState);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
