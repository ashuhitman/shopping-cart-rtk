import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const intialState = {
  items: [],
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
        count: state.count - 1,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
