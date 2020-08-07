/**
 * @description BuyNow is a page where and when user selects Buy Now option from a Book
 * @function BuyNow
 * @param {object} props - selectedBook, products, cartItems
 * @returns {object} DOM
 * @author Abhinav Adepu
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAnItem } from "./../actions/buyActions";
import HeaderComponent from "./HeaderComponent";
import { addToCart } from "./../actions/cartActions";
import { withRouter } from "react-router-dom";
class BuyNow extends Component {
  render() {
    const { selectedBook, cartItems } = this.props;
    console.log(this.props);
    return (
      <>
        <HeaderComponent
          subHeader={
            <span>
              {`${" | <" + selectedBook.selectedItem.product.title + ">"}`}
            </span>
          }
        />
        <div>
          {!selectedBook &&
          !selectedBook.selectedItem &&
          !selectedBook.selectedItem.product ? (
            "Basket is empty"
          ) : (
            <div className="details">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="details-image">
                  <img
                    src={
                      selectedBook.selectedItem &&
                      selectedBook.selectedItem.product.book_image
                    }
                    alt="product"
                  />
                </div>
                <div className="details-info">
                  <ul>
                    <li>
                      <h3>
                        {selectedBook.selectedItem &&
                          selectedBook.selectedItem.product.title}
                      </h3>
                    </li>
                    <li>
                      Book Price:{" "}
                      <span className="price">
                        {selectedBook.selectedItem &&
                          selectedBook.selectedItem.product.price}
                      </span>
                    </li>
                    <li>
                      Author Name:{" "}
                      {selectedBook.selectedItem &&
                        selectedBook.selectedItem.product.author}
                    </li>
                    <li>
                      Page Count:
                      {selectedBook.selectedItem &&
                        selectedBook.selectedItem.product.book_image_height}
                    </li>
                    <li>
                      ISBN:
                      {selectedBook.selectedItem &&
                        selectedBook.selectedItem.product.isbns[0].isbn10}
                    </li>
                    <li style={{ width: "230px" }}>
                      <div className="detail-button-flex">
                        <button
                          className="buyNowbutton"
                          type="button"
                          onClick={e => {
                            this.props.addToCart(
                              cartItems,
                              selectedBook.selectedItem.product
                            );
                            this.props.history.push("/MyCart");
                          }}
                        >
                          Buy Now
                        </button>
                        <button
                          className="buyNowbutton"
                          type="button"
                          onClick={e =>
                            this.props.addToCart(
                              cartItems,
                              selectedBook.selectedItem.product
                            )
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="details-actions">
                <ul>
                  <li
                    style={{
                      background: "#c1c1c1",
                      height: "200px"
                    }}
                  >
                    <div>
                      {selectedBook.selectedItem &&
                        selectedBook.selectedItem.product.description}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  selectedBook: state.selectedItem,
  products: state.products.items,
  cartItems: state.cart.items
});
export default withRouter(
  connect(
    mapStateToProps,
    { selectAnItem, addToCart }
  )(BuyNow)
);
