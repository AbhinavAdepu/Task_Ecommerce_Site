/**
 * @description FETCH_PRODUCTS Reducers for fetching products
 * @function nil
 * @param {object} - FETCH_PRODUCTS
 * @returns {object} reducer
 * @author Abhinav Adepu
 */
import { FETCH_PRODUCTS } from "../actions/types";

const initState = { items: [] };
export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
}
