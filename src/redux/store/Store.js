// import {createStore} from 'redux';
// import { Reducers } from '../reducer/Reducers';

//  const store = createStore(Reducers);

//  export default store;
// store.js

import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../slices/ProductsSlice";
import WishlistReducer from "../slices/WishlistSlice";
import CartReducer from "../slices/CartSlice";
import AddressReducer from "../slices/AddressSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
    address: AddressReducer,
  },
});


export default store;

