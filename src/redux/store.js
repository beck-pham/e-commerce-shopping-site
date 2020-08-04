import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // build an array for middlewares for more scalablity when we want to add more middlewares

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // called persistor function

export default { store, persistor };
