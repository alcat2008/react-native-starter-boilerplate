
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';

const middleware = [thunkMiddleware, promiseMiddleware];

export default function configureStore(initialState, onComplete: ?() => void) {
  let finalCreateStore;
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    // const devTools = require('remote-redux-devtools');
    const createLogger = require('redux-logger');

    const loggerMiddleware = createLogger({ duration: true });
    finalCreateStore = compose(
      applyMiddleware(...middleware, loggerMiddleware),
      // devTools({ realtime: true })
    )(createStore);
  }

  const store = finalCreateStore(rootReducer, initialState);
  onComplete && onComplete();

  return store;
}
