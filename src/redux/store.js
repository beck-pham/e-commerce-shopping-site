import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // build an array for middlewares for more scalablity when we want to add more middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
