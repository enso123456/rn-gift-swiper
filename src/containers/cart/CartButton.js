import React from 'react';
import { Button } from 'react-native-paper';
import styles from './styles';

// Count the items in the cart
export default CartButton = ({ nav, cart }) => (
  <Button
    icon="shopping-cart"
    mode="outlined"
    style={styles.cartButton}
    onPress={() => nav.push('/shopping-cart', cart)}
  >{cart.length}</Button>
)