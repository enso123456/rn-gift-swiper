import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native'
import styles from './styles';

const Menu = () => (
  <View style={styles.container}>
    <Link to={'/products'}>
      <Text>Menu List</Text>
    </Link>
  </View>
)


export default Menu;    