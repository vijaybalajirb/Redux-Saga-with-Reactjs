import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};
export const emptyFromCart = () => {
  return {
    type: EMPTY_FROM_CART,
  };
};