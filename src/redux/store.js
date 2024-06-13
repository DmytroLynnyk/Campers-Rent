import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { camperReducer } from './campers/slice.js';
import { filtersReducer } from './filters/slice.js';

const camperPersistConfig = {
  key: 'campers',
  storage,
  // blacklist: ['filters'],
  //   whitelist: ['filters'],
};

export const store = configureStore({
  reducer: {
    data: persistReducer(camperPersistConfig, camperReducer),
    filters: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
