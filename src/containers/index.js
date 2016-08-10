import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { Device } from 'mx-artifacts';
import configureStore from '../store/configureStore';

import { setPlatform, setLayout } from '../actions/device';

import Application from './App';


const setup = () => {
  const device = {
    width: Device.deviceWidth,
    height: Device.deviceHeight,
    statusBarHeight: Device.statusBarHeight,
    innerStatusBarSize: Device.innerStatusBarSize,
    navBarHeight: Device.navBarHeight,
  };

  class AppContainer extends React.Component {
    componentWillMount() {
      // const store = configureStore({}, () => {
      //   setTimeout(() => {
      //     this.setState({ isLoading: false });
      //   }, 2000);
      // });

      // store.dispatch(setPlatform());
      // store.dispatch(setLayout(device));

      // this.setState({
      //   isLoading: true,
      //   store: configureStore({}, () => {
      //     setTimeout(() => {
      //       this.setState({ isLoading: false });
      //     }, 2000);
      //   }),
      // });

      this.state = {
        isLoading: true,
        store: configureStore({}, () => {
          setTimeout(() => {
            this.setState({ isLoading: false });
          }, 2000);
        }),
      };
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading view.</Text>
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
