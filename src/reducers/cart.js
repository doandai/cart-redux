import * as types from "../contants/ActionTypes";
import { findIndex } from "lodash";
var data = JSON.parse(localStorage.getItem("CART"));

var initialSate = data ? data : [];

const cart = (state = initialSate, action) => {
  let { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:   
      var index = findIndex(state, (state) => {
        return state.product.id === product.id;
      });
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.DELETE_TO_CART:
      index = findIndex(state, (state) => {
        return state.product.id === product.id;
      });
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART",JSON.stringify(state))
      return [...state];
    case types.UPDATE_TO_CART:
      index = findIndex(state, (state) => {
        return state.product.id === product.id;
      });
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART",JSON.stringify(state))
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
