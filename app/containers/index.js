import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger({
  duration: true
});

import reducers from '../reducers';

const middleware = [thunk, logger];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);


import Application from './app';

const AppContainer = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);


export default AppContainer;
