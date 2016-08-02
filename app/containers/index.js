import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import Application from './app';
const store = configureStore();

const AppContainer = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);


export default AppContainer;
