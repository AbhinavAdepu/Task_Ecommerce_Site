/**
 * @description Products gets placed in a container after fetching the products from API
 * @function Products
 * @param {object} - fetchProducts
 * @returns {object} DOM
 * @author Abhinav Adepu
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { selectAnItem } from "./../actions/buyActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map(product => (
      <div className="bookBlock" key={product.rank}>
        <div className="thumbnail text-center">
          <div>
            <img
              alt={product.title}
              src={product.book_image}
              style={{ width: "220px", height: "100px" }}
            ></img>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>
              {product.title && product.title.substring(0, 15) + "..."}
            </p>
            <p>
              {product.description &&
                product.description.substring(0, 30) + "..."}
            </p>
            {
              <button
                className="buyNowbutton"
                onClick={e => {
                  this.props.selectAnItem(product);
                  this.props.history.push("/BuyNow");
                }}
              >
                Buy Now
              </button>
            }
          </div>
        </div>
      </div>
    ));

    return (
      <>
        <div className="book-row">{productItems}</div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.items,
  cartItems: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: bindActionCreators(fetchProducts, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch),
  selectAnItem: bindActionCreators(selectAnItem, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products)
);
