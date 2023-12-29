import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        const updatedItems = state.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        state.items = updatedItems;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseFromCart: (state, action) => {
      const itemId = action.payload;
      const existItem = state.items.find((item) => item.id === itemId);
      if (existItem && existItem.quantity > 1) {
        const updatedItems = state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        state.items = updatedItems;
      } else if (existItem && existItem.quantity === 1) {
        const filteredItems = state.items.filter((item) => item.id !== itemId);
        state.items = filteredItems;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseFromCart } =
  cartSlice.actions;
