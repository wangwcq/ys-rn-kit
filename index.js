import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './screens/Loading';
import { consts, initConsts } from './utils/consts';

import _ from 'lodash';

import initStore from './store/index';

let store = null;
let persistor = null;

// dev only tools
const purge = () => persistor.purge();

/**
 * register
 * @param options
 * @param {boolean} options.purge
 * @returns {function(): *}
 */
const register = (options = {}) => {
  if (options.purge) purge();

  const {
    store: vStore,
    persistor: vPersistor,
  } = initStore();
  store = vStore;
  persistor = vPersistor;

  AppRegistry.registerComponent(consts.appKey, () => () => {
    return (
      <Provider store={store}>
        <PersistGate
          loading={Loading}
          persistor={persistor}
        >
          <Loading />
        </PersistGate>
      </Provider>
    );
  });
};

export {
  store,
  persistor,
  purge,
  _,
  consts,
  initConsts,
  register,
};
