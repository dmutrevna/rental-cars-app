import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
import { advertsReducer } from './advertsSlice'

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistedStore = persistStore(store)
