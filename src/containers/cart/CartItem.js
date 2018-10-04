import React from 'react';
import PropTypes from 'prop-types';
import { Card, Title } from 'react-native-paper';
import styles from './styles';

const CartItem = ({ name, image }) => {
  return (
    <Card style={styles.cartItem}>
      <Card.Cover source={{ uri: image }} />
      <Title>{name}</Title>
    </Card>
  )
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CartItem;