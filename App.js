import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { registerRootComponent } from 'expo'

import { store, persistor } from './store'
import Loading from './src/layouts/loading';
import AppNavigatorWithState from './src/app-navigator-with-state';

export default class App extends Component {
  state={}
  render() {
    //persistor.purge()
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  } 
}