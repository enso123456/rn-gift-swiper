import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { removeToCart } from '../../reducers/cart/actions';
import BackButton from '../../components/BackButton';
import CartList from './CartList';

class Cart extends PureComponent {
  state = { cart: [] }

  componentDidMount() {
    const { cart } = this.props;
    this.setState(({ prev, current }) => ({ cart }));
  }

  componentWillReceiveProps({ cart }) {
    this.setState(({ prev, prop }) => ({ cart }))
  }

  onRemoveItem = (item) => this.props.removeToCart(item);

  render() {
    console.log(this.state.cart);
    return (
      <View style={styles.container}>
        <BackButton nav={this.props.history} />
        {
          this.state.cart.length > 0 ? <CartList history={this.props.history} onRemoveItem={this.onRemoveItem} cart={this.state.cart} /> : <Text style={styles.noCart}>You're cart is empty</Text>
        }
      </View>
    )
  }
}

const mapStateToProps = ({ cart }) => {
  return { cart: cart.carts };
};

const mapDispatchToProps = dispatch => ({
  removeToCart: (item) => dispatch(removeToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

