import React from 'react'
import { NativeRouter, Route, BackButton } from 'react-router-native'
import Menu from '../menu';
import Products from '../products';
import Cart from '../cart/Cart';

const App = () => (
  <NativeRouter>
    <BackButton>
      <Route exact path="/" component={Menu} />
      <Route path="/products" component={Products} />
      <Route path="/shopping-cart" component={Cart} />
    </BackButton>
  </NativeRouter>
);

export default App