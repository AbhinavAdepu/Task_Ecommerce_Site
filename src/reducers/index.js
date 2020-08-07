/**
 * @description Combined Reducers for all the reducers we created
 * @function combineReducers
 * @param {object} - NIL
 * @returns {object} reducer
 * @author Abhinav Adepu
 */
import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import buyNowReducer from "./buyNowReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  selectedItem: buyNowReducer
});
