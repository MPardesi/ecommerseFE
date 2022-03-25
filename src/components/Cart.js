import React, { Component } from "react";
import CartContext from "../context/CartContext";
class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cart }) => {
          console.log(cart);
          let sum = cart.reduce((acc, item) => acc + item.countInCart, 0);
          return (
            <div className="item">
              <i className="fa fa-shopping-cart"></i>
              <span
                style={{
                  color: "white",
                  background: "red",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              >
                {sum}
              </span>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Cart;
