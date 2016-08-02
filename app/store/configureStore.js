
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
const logger = createLogger({ duration: true });
const middleware = [thunk, logger];

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools({ realtime: true })
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
