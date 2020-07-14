/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import { actAddToCart ,actChangeMessage } from "../actions/index";

class ProductsContainer extends Component {
  render() {
    let { products ,onAddToCart,onChangeMessage } = this.props;
    return (
      <Products>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              onAddToCart={onAddToCart}
              onChangeMessage={onChangeMessage}
            />
          );
        })}
      </Products>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage : (message) =>{
      dispatch(actChangeMessage(message))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
