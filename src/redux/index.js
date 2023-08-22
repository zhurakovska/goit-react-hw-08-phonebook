// імпортуємо функцію створення стору
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
import { userReducer } from './Auth/authSlice';
//імпортуємо редьюсери
import { contactsReducer } from './contactsSlice/contactsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

//Ми створюємо стор та експортуємо його для використання в index.js
export const store = configureStore({
  //додаємо редьюсер
  reducer: {
    contactList: contactsReducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production', // відключити devTools
});

export const persistor = persistStore(store);
