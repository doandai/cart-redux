import * as types from "../contants/ActionTypes";
import *as Message from "../contants/Message"

var initialSate = Message.MSG_WELCOME

const message = (state = initialSate, action) => {
 
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message
    default:
      return [...state];
  }
};

export default message;
