import React from 'react';
import { FlatList, View, } from 'react-native';
import { MediaQuery, ResponsiveComponent } from 'react-native-responsive-ui';
import BackButton from '../../components/BackButton';
import CartItem from './CartItem';
import styles from './styles';

class CartList extends ResponsiveComponent {
  render() {
    const { width, height } = this.state.window;
    const { history, location: { state: cartItems } } = this.props;
    const numColumns = width >= 768 ? 4 : 2;
    return (
      <View style={styles.container}>
        <BackButton nav={history} />
        <FlatList
          numColumns={numColumns}
          data={cartItems}
          contentContainerStyle={styles.cartList}
          renderItem={({ item }) => (<CartItem {...item} />)}
          keyExtractor={(index) => { return index.name }}
        />
      </View>
    )
  }
}


export default CartList;

