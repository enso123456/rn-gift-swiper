/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import store from './src/config/store';
import App from './src/containers/routers/router';
import { name as appName } from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const Main = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
