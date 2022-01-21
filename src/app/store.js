import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import totalAmountSlice from "./cart/totalAmountSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        total: totalAmountSlice
    }
})