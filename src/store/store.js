import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
    product: productSlice.reducer,
    filter: filterSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart: cartSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;