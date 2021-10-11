import React from 'react';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'usuario' ]
};

const pReducers = persistReducer( persistConfig, Reducers );

const store = createStore(pReducers);
const persistor = persistStore( store );

export { store, persistor };