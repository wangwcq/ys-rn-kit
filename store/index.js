import { AsyncStorage } from 'react-native';
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: 'mionnaise',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  theme: (state = {}, action) => ({ ...state }),
}); // todo

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

