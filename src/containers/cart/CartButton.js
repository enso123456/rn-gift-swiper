import React from 'react';
import { Button } from 'react-native-paper';
import { CartContext } from './CartProvider';
import styles from './styles';

// Count the items in the cart
export default CartButton = ({ nav }) => (
  <CartContext.Consumer>
    {({ carts }) => {
      return (
        <Button
          icon="shopping-cart"
          mode="outlined"
          style={styles.cartButton}
          onPress={() => nav.push('/shopping-cart', carts)}
        >{carts.length}</Button>
      );
    }}
  </CartContext.Consumer>
)