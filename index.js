import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './screens/Loading';
import ThemedApp from './ThemedApp';
import { consts, initConsts } from './utils/consts';

import _ from 'lodash';

import initStore from './store/index';

const { store, persistor } = initStore({
});

// dev only tools
const purge = () => persistor.purge();

const App: () => {
  return (
    <Provider store={store}>
    <PersistGate loading={Loading} persistor={persistor}>
    <ThemedApp />
    </PersistGate>
    </Provider>
  );
};

export {
  App,
  store,
  persistor,
  purge,
  _,
  consts,
  initConsts,
};
