/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import Message from '../components/Message'


class MessageContainer extends Component {
  render() {
    let {message} = this.props
  return(
    <Message  message={message}/>
  )
}
}
const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};


export default connect(mapStateToProps, null)(MessageContainer);