import React from 'react';
import PropTypes from 'prop-types';
import { Card, Title } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import styles from './styles';

const CartItem = ({ name, image, onRemoveItem }) => {
  console.log('im rendere');
  return (
    <Card style={styles.cartItem}>
      <GestureRecognizer onSwipeLeft={() => onRemoveItem(name)}>
        <Card.Cover source={{ uri: image }} />
        <Title>{name}</Title>
      </GestureRecognizer>
    </Card>
  )
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default CartItem;