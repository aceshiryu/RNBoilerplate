import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = persistReducer(config, reducers);

const configureStore = () => {
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
