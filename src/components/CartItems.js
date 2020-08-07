/**
 * @description BuyNow is a page where and when user selects Buy Now option from a Book
 * @function BuyNow
 * @param {object} props - selectedBook, products, cartItems
 * @returns {object} DOM
 * @author Abhinav Adepu
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
import HeaderComponent from "./HeaderComponent";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
class CartItems extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
    // this is to set the initial state of the component
    this.handleChange = this.handleChange.bind(this);
    // as you probably
    // know, if you're going to be passing functions around and invoke them as
    // callbacks, you'll need to hold onto 'this' because it's bound at runtime
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  initialState() {
    // woohoo, just an object that represents an empty parlor
    return {
      name: "",
      street_address: "",
      city: "",
      state: "",
      zip_code: "",
      googleMapLink: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this is just some redux.
    // just trust that it does what it's supposed to do,
    // send an ajax request to my server
  }

  render() {
    const { cartItems } = this.props;
    return (
      <>
        <HeaderComponent subHeader={<span>{`${" | Cart"}`}</span>} />
        <div className="mycart-class">
          <div>
            <div>Shipping Address</div>
            <div className="addressForm">
              <form onSubmit={this.handleSubmit}>
                <input
                  id="autocomplete"
                  className="input-field"
                  ref="input"
                  type="text"
                />
                {/*  this is the input field used specifically for autocomplete
                note that it doesn't respond to changes in state, nor does it
                change state it's just talking to the Google Maps API // I've
                given it an id so we can reference it when we instantiate the
                Google Autocomplete box */}
                <input
                  name={"name"}
                  value={this.state.name}
                  placeholder={"Name"}
                  onChange={this.handleChange}
                />
                <input
                  name={"street_address"}
                  value={this.state.streetAddress}
                  placeholder={"Street Address"}
                  onChange={this.handleChange}
                />
                <input
                  name={"city"}
                  value={this.state.city}
                  placeholder={"City"}
                  onChange={this.handleChange}
                />
                <input
                  name={"state"}
                  value={this.state.state}
                  placeholder={"State"}
                  onChange={this.handleChange}
                />
                <input
                  name={"zip_code"}
                  value={this.state.zip_code}
                  placeholder={"Zipcode"}
                  onChange={this.handleChange}
                />
                <button className="buyNowbuttonbg" onSubmit={this.handleSubmit}>Save Address</button>
              </form>
            </div>
          </div>

          <div>
            {cartItems.length === 0 ? (
              <div className="noItems">Your cart is empty</div>
            ) : (
              <div>Shopping Bag</div>
            )}
            {cartItems.length > 0 && (
              <div className="shopping-bag">
                <ul style={{ marginLeft: -25 }}>
                  {cartItems.map(item => (
                    <li key={item.rank}>
                      <div>
                        <img alt={item.title} src={item.book_image} />
                        <b>{item.title}</b>
                        <button
                          className="buyNowbuttonbg"
                          style={{ float: "right" }}
                          onClick={e =>
                            this.props.removeFromCart(
                              this.props.cartItems,
                              item
                            )
                          }
                        >
                          X
                        </button>
                      </div>
                      <div>
                        {" "}
                        {item.count} X {util.formatCurrency(item.price)}
                      </div>
                    </li>
                  ))}
                </ul>

                <b>
                  Total:{" "}
                  {util.formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </b>
                <button
                  className="buyNowbuttonbg"
                  onClick={() => alert("Todo: Implement checkout page.")}
                >
                  checkout
                </button>
                <button className="buyNowbuttonbg">
                  <Link to="/">Cancel</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  cartItems: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
