/**
 * @description Reducer for SELECTED_ITEM
 * @function Export
 * @param {object} - NIL
 * @returns {object} state
 * @author Abhinav Adepu
 */

import { SELECTED_ITEM } from "../actions/types";
export default function(state = {}, action) {
  switch (action.type) {
    case SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
}
