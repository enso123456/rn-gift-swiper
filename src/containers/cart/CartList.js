import React from 'react';
import { FlatList, View } from 'react-native';
import { ResponsiveComponent } from 'react-native-responsive-ui';
import CartItem from './CartItem';
import styles from './styles';

class CartList extends ResponsiveComponent {
  render() {
    const { width } = this.state.window;
    const { cart, onRemoveItem } = this.props;
    const numColumns = width >= 768 ? 4 : 2;
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={numColumns}
          data={cart}
          contentContainerStyle={styles.cartList}
          renderItem={({ item }) => (<CartItem {...item} onRemoveItem={onRemoveItem} />)}
          keyExtractor={(index) => { return index.name }}
        />
      </View>
    )
  }
}

export default CartList;

