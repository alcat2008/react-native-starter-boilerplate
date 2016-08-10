import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import Application from './app';

const setup = () => {
  class AppContainer extends React.Component {
    componentWillMount() {
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
