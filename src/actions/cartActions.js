/**
 * @description To Dispatch addToCart Action when user want to ADD TO CART
 * @class addToCart
 * @author Abhinav Adepu
 */
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => dispatch => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach(cp => {
    if (cp.rank === product.rank) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};
/**
 * @description To Dispatch RemoveFromCart Action when user want to Remove From CART
 * @class removeFromCart
 * @author Abhinav Adepu
 */
export const removeFromCart = (items, product) => dispatch => {
  const cartItems = items.slice().filter(a => a.rank !== product.rank);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
