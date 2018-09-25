import React from 'react'
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import Menu from '../menu/';
import Products from '../products/';

const App = () => (
  <NativeRouter>
    <BackButton>
      <Route exact path="/" component={Menu} />
      <Route path="/products" component={Products} />
    </BackButton>
  </NativeRouter>
);

export default App