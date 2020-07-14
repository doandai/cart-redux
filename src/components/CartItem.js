/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import * as Message from "../contants/Message";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  onDeleteCart = (cart) => {
    this.props.onDeleteCart(cart);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity,
      });
      this.props.onUpdateCart(product, quantity);
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  };

  render() {
    let { cart } = this.props;
    let { quantity } = cart.quantity > 0 ? cart : this.state;
    return (
      <tr>
        <th scope="row">
          <img
            src={cart.product.image}
            className="img-fluid z-depth-0"
            alt={cart.product.name}
          />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{cart.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() =>
                this.onUpdateQuantity(cart.product, cart.quantity - 1)
              }
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <span>-</span>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(cart.product, cart.quantity + 1)
              }
              className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light"
            >
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{cart.product.price * cart.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={() => this.onDeleteCart(cart.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
