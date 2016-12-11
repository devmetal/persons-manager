import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

export default function() {
  return createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
}