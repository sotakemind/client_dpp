
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistStore
} from 'redux-persist'
import { filtersSlice } from '../../app/explorer/filters/filters.slice'
import { cartSlice } from './cart/cart.slice'
import { userSlice } from './user/user.slice'


const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
    cart: cartSlice.reducer,
    // carousel: carouselSlice.reducer,
    user: userSlice.reducer,
    filters: filtersSlice.reducer
})

let mainReducer = combinedReducers

if(isClient) {
    const { persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
        key: 'techbyte',
        storage,
        whitelist: ['cart']
    }

    mainReducer = persistReducer(persistConfig, combinedReducers)
}


export const store = configureStore({
    reducer: mainReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>