import React from "react";
import HeaderComponent from "./HeaderComponent";
import { MYORDERS } from "./../constants/orders";
class MyOrders extends React.Component {
  render() {
    const orderItems = MYORDERS.totalOrders.map(product => (
      <div className="card-block" key={product.rank}>
        <div className="card-top">
          <div className="card-top-left">
            order Placed on : {product.orderDate}
          </div>
          <div className="card-top-right">Status: {product.status}</div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-left">
            <img
              alt={product.title}
              src={product.book_image}
              style={{ width: "220px", height: "100px" }}
            ></img>
          </div>
          <div className="card-bottom-right">
            <p style={{ fontWeight: "bold" }}>
              Title: {product.title && product.title.substring(0, 15) + "..."}
            </p>
            <p>Authour: {product.author && product.author}</p>
            <p>Price: {product.price && product.price}</p>
          </div>
        </div>
      </div>
    ));

    return (
      <>
        <HeaderComponent subHeader={<span>{`${" | My Orders"}`}</span>} />
        <div className="book-row">{orderItems}</div>
      </>
    );
  }
}
export default MyOrders;
