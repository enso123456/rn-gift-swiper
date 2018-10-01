import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native-paper';
import styles from './styles';

// Open a modal choose you selected choice
const MenuPicker = ({ text }) => (
  <Button mode="contained" dark={false} style={styles.button}>
    <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
  </Button>
);

MenuPicker.propTypes = {
  text: PropTypes.string.isRequired
};

export default MenuPicker;    