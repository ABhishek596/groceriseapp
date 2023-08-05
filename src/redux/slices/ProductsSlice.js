const { createSlice } = require('@reduxjs/toolkit');

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {}, // Change the initial state to an empty object
  reducers: {
    addProducts(state, action) {
      const productsByCategory = action.payload.reduce((acc, product) => {
        const { category } = product;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      }, {});
      return productsByCategory; // Update the state with products organized by category
    },
    increaseQty(state, action) {
      const productId = action.payload;
      const item = Object.values(state).flat().find(item => item.id === productId);
      if (item) {
        item.qty = (item.qty || 0) + 1;
      }
    },
    decreaseQty(state, action) {
      const productId = action.payload;
      const item = Object.values(state).flat().find(item => item.id === productId);
      if (item) {
        item.qty = (item.qty || 0) - 1;
      }
    },
  },
});

export const { addProducts, increaseQty, decreaseQty } = ProductsSlice.actions;
export default ProductsSlice.reducer;
