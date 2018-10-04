import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';

export default ({ nav }) => {
  return (
    <Button mode="outlined" onPress={() => nav.goBack()} style={styles.backBtn}>
      <Text style={styles.backText}>Back</Text>
    </Button>
  );
}