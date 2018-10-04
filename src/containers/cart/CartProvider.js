import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  state = {
    carts: [],
    addToCart: (item) => {
      this.setState({ carts: [...this.state.carts, item] });
    }
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}