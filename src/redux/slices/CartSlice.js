// import { createSlice } from '@reduxjs/toolkit';

// const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     addItemToCart(state, action) {
//       let tempData = state.data;
//       let isItemExist = false;
//       tempData.map(item => {
//         if (item.id === action.payload.id) {
//           isItemExist = true;
//           item.qty = item.qty + 1;
//         }
//       });
//       if (!isItemExist) {
//         tempData.push(action.payload);
//       }
//       state.data = tempData;
//     },
//     reduceItemFromCart(state, action) {
//       let tempData = state.data;
//       tempData.map(item => {
//         if (item.id === action.payload.id) {
//           item.qty = item.qty - 1;
//         }
//       });
//       state.data = tempData;
//     },
//     removeItemFromCart(state, action) {
//       let tempData = state.data;
//       tempData = tempData.filter(item => item.id !== action.payload);
//       state.data = tempData;
//     },
//   },
// });

// export const { addItemToCart, reduceItemFromCart, removeItemFromCart } = CartSlice.actions;
// export default CartSlice.reducer;

// const { createSlice } = require('@reduxjs/toolkit');

// const CartSlice = createSlice({
//   name: 'products',
//   initialState: {}, // Change the initial state to an empty object
//   reducers: {
//     addItemToCart(state, action) {
//       const productsByCategory = action.payload.reduce((acc, product) => {
//         const { category } = product;
//         if (!acc[category]) {
//           acc[category] = [];
//         }
//         acc[category].push(product);
//         return acc;
//       }, {});
//       return productsByCategory; // Update the state with products organized by category
//     },
//   },
// });

// export const { addItemToCart } = CartSlice.actions;
// export default CartSlice.reducer;

const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const category = item.category;

      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex(
        cartItem => cartItem.id === item.id && cartItem.category === category,
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        state[existingItemIndex].qty += 1;
      } else {
        // If the item doesn't exist in the cart, add it to the correct category
        state.push({...item, qty: 1});
      }
    },
    reduceItemFromCart(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item exists in the cart, reduce its quantity
        existingItem.qty -= 1;
      }
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state = state.filter(item => item.id !== itemIdToRemove);
      // The above line creates a new state array after removing the item from the cart.
      // We don't directly mutate the original state to ensure Redux's immutability principles are followed.
      return state;
    },
  },
});

export const {addItemToCart, reduceItemFromCart, removeItemFromCart} =
  CartSlice.actions;
export default CartSlice.reducer;
