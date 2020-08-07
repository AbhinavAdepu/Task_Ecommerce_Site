/**
 * @description HeaderComponent
 * @function HeaderComponent
 * @param {object} props - subHeader
 * @returns {object} DOM
 * @author Abhinav Adepu
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { connect } from "react-redux";

class HeaderComponent extends Component {
  render() {
    const { subHeader } = this.props;
    return (
      <div className="container-header">
        <p className="header-left">
          <Link to="/">eCommerce Site</Link>
          {subHeader && subHeader}
        </p>
        <div className="header-right">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>|</div>
          <div>
            <Link to="/MyOrders">My Orders</Link>
          </div>
          <div>|</div>
          <div>
            <div className="cartFlex">
              <Link to="/MyCart">Cart</Link>
              <div className="cartValue">
                <Basket />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBook: state.selectedItem
});
export default connect(mapStateToProps)(HeaderComponent);
