import {
  ADD_TO_CART,
  DECREASE_ITEM_FROM_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from "./cartTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};
export const decreaseFromCart = (itemId) => {
  return {
    type: DECREASE_ITEM_FROM_CART,
    payload: itemId,
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
