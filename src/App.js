/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainers from "./containers/CartContainers";
import MessageContainers from "./containers/MessageContainers";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer />
              <MessageContainers />
              <CartContainers />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
