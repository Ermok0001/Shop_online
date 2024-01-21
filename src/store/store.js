import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice, favoriteSlice, sortedProductSlice } from "./reducer";

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice.reducer,
        fav: favoriteSlice.reducer,
        sort: sortedProductSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
})