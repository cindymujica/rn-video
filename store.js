import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage';
import {AsyncStorage} from 'react-native';
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import reducers from './src/reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selectedMovie']
}
const persistedReducer = persistReducer(persistConfig, reducers);
const navigationMiddleware = createReactNavigationReduxMiddleware(
  // 'root',
  state => state.nav
)

const store = createStore(persistedReducer, applyMiddleware(navigationMiddleware));
const persistor = persistStore(store);

export {store, persistor};