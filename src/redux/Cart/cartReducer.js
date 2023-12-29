import {
  ADD_TO_CART,
  DECREASE_ITEM_FROM_CART,
  REMOVE_FROM_CART,
} from "./cartTypes";

const intialState = {
  items: [],
  loading: false,
};
export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        const updatedItems = state.items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // If it's a new item, add it to the cart
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,

        items: state.items.filter((item) => item.id !== action.payload),
      };
    case DECREASE_ITEM_FROM_CART:
      const itemId = action.payload;
      const existItem = state.items.find((item) => item.id === itemId);
      if (existItem && existItem.quantity > 1) {
        const updatedItems = state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...state,
          items: updatedItems,
        };
      } else if (existItem && existItem.quantity === 1) {
        const filteredItems = state.items.filter((item) => item.id !== itemId);
        return {
          ...state,
          items: filteredItems,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default cartReducer;
