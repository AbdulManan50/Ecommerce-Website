import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./AddtocartSlice";
import wishlistReducer from "../Feature/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
