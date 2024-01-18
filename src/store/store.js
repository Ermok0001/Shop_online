import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice, favoriteSlice } from "./reducer";

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice.reducer,
        fav: favoriteSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
})