/**
 * @description Basket
 * @function Basket
 * @param {object} props - cartItems
 * @returns {object} DOM
 * @author Abhinav Adepu
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
class Basket extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div id="cartItems">
        {cartItems.length === 0 ? 0 : <>{cartItems.length} </>}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(Basket);
