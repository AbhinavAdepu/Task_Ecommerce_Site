/**
 * @description To Dispatch selectAnItem Action when user selects a Book
 * @class fetchProducts
 * @author Abhinav Adepu
 */
import { SELECTED_ITEM } from "./types";

export const selectAnItem = product => dispatch => {
  localStorage.setItem("selectedItem", JSON.stringify(product));
  dispatch({ type: SELECTED_ITEM, payload: { product } });
};
