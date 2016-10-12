import React from 'react';
import { Provider } from 'react-redux';
import { Device } from 'mx-artifacts';
import configureStore from '../store/configureStore';

import { setLayout } from '../actions/device';
import { initApp } from '../actions/global';

import Application from './App';

const device = {
  width: Device.width,
  height: Device.height,
  statusBarHeight: Device.statusBarHeight,
  innerStatusBarSize: Device.innerStatusBarSize,
  navBarHeight: Device.navBarHeight,
};

const setup = () => {
  const store = configureStore({});
  // store.dispatch(setPlatform());
  store.dispatch(setLayout(device));
  store.dispatch(initApp());

  const AppContainer = () => (
    <Provider store={store}>
      <Application />
    </Provider>
  );
  return AppContainer;
};

export default setup();
