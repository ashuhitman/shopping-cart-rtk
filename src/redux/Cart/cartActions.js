import { ADD_TO_CART } from "./cartTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_TO_CART,
    payload: itemId,
  };
};
