// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'modern-normalize/modern-normalize.css';
// import {Provider} from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import store from './components/redux/store'

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store.store}>
//     <PersistGate losding={null} persistor ={store.persistor}>
//      <App />
//      </PersistGate>
//     </Provider>
//    </React.StrictMode>,
//   document.getElementById('root')
// );




import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import contactsReducer from './contacts/contacts-reducer';
import authReducer from '../redux/auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);