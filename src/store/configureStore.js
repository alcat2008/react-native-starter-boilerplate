
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
const loggerMiddleware = createLogger({ duration: true });
const middleware = [thunkMiddleware, promiseMiddleware, loggerMiddleware];

export default function configureStore(initialState, onComplete: ?() => void) {
  const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools({ realtime: true })
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  onComplete && onComplete();

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
