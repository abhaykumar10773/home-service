// src/app/store.js
import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import bookingReducer from '../features/booking/bookingSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  booking: bookingReducer,
});
// Persist config
const persistConfig = {
  key: 'root', // Root key for storage
  storage,
  whitelist: ['auth', 'booking'], // Specify only reducers to persist
  transforms: [
    {
      in: (state) => {
        // Exclude 'password' from the auth state
        if (state.auth) {
          const {  ...rest } = state.auth; // Remove 'password'
          return { ...state, auth: rest };
        }
        return state;
      },
      out: (state) => state, // No changes during rehydration
    },
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid serialization issues with redux-persist
    }),
});
// Create persistor
export const persistor = persistStore(store);

export default store;