/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../contants/Message";
import { actDeleteCart, actChangeMessage,actUpdateCart } from "../actions/index";
class CartContainers extends Component {
  render() {
    let { cart, onDeleteCart, onChangeMessage,onUpdateCart } = this.props;
    if (cart.length === 0) {
      return Message.MSG_CART_EMPTY;
    }
    return (
      <Cart>
        {cart.map((cart, index) => {
          return (
            <CartItem
              key={index}
              cart={cart}
              onDeleteCart={onDeleteCart}
              onChangeMessage={onChangeMessage}
              onUpdateCart={onUpdateCart}
            />
          );
        })}
        <CartResult cart={cart} />
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch,props) => {
  return {
    onDeleteCart: (cart) => {
      dispatch(actDeleteCart(cart));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateCart : (product,quantity) =>{
      dispatch(actUpdateCart(product,quantity))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainers);
