import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../basket/basket.slice'

//filter chain под капотом lol
const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    return result;
};

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});
