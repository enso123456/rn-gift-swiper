'use strict';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './Card';
import NoMoreCard from './NoMoreCard';
import CartButton from '../cart/CartButton';
import BackButton from '../../components/BackButton';
import { addToCart } from '../../reducers/cart/actions';
import styles from './styles';

const cards = [
  { name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
  { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
  { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
  { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
  { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
  { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
  { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
  { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
  { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
];

const cards2 = [
  { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
];

class Product extends PureComponent {
  state = {
    cards: cards,
    outOfCards: false,
    cart: [],
  }

  componentDidMount() {
    const { cart } = this.props;
    this.setState(({ prev, current }) => ({ cart }));
  }

  componentWillReceiveProps({ cart }) {
    this.setState(({ prev, current }) => ({ cart }));
  }

  handleNope(card) {
    console.log("nope")
  }

  cardRemoved = (index) => {
    console.log(`The index is ${index}`);
    let CARD_REFRESH_LIMIT = 3
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)
        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
    }
  }

  handleYup = (item) => {
    this.props.addToCart(item);
    this.cardRemoved(item);
  }

  render() {
    return (
      <View style={styles.base}>
        <BackButton nav={this.props.history} />
        <SwipeCards
          showYup={false}
          showNope={false}
          cards={this.state.cards}
          loop={false}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCard />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
        />
        <CartButton nav={this.props.history} cart={this.state.cart} />
      </View>
    )
  }
}

const mapStateToProps = ({ cart }) => {
  return { cart: cart.carts };
}

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);