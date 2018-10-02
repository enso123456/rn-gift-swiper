import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Card = ({ image, name }) => (
  <View style={styles.card}>
    <Image style={styles.thumbnail} source={{ uri: image }} />
    <Text style={styles.text}>This is card {name}</Text>
  </View>
);

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

export default Card;