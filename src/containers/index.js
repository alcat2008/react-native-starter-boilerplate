import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { Device } from 'mx-artifacts';
import configureStore from '../store/configureStore';

import { setLayout } from '../actions/device';
import { initApp } from '../actions/global';

import Application from './App';


const setup = () => {
  const device = {
    width: Device.width,
    height: Device.height,
    statusBarHeight: Device.statusBarHeight,
    innerStatusBarSize: Device.innerStatusBarSize,
    navBarHeight: Device.navBarHeight,
  };

  class AppContainer extends React.Component {
    constructor(props) {
      super(props);
      // initial state
      this.state = {
        isLoading: true,
        store: null,
      };
    }

    componentWillMount() {
      const store = configureStore({});

      // store.dispatch(setPlatform());
      store.dispatch(setLayout(device));
      store.dispatch(initApp());

      this.setState({
        isLoading: false,
        store,
      });
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading view ...</Text>
          </View>
        );
      }
      return (
        <Provider store={this.state.store}>
          <Application />
        </Provider>
      );
    }
  }

  return AppContainer;
};

export default setup();
