import { ADD_TO_CART, EMPTY_FROM_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (product = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload, "ADD");
      console.log(product);
      return [action.payload, ...product];

    case REMOVE_FROM_CART:
      console.log("Inreducer of Remove form cart");
      console.log(action.payload, "REMOVE");
      // product.length ? (product.length = product.length - 1) : (product = []);
      const remaingItems = product.filter((item) => item.id !== action.payload);
      console.log(remaingItems);
      return [...remaingItems];

    case EMPTY_FROM_CART:
      console.log("EMPTY of Remove form cart");
      console.log(product, "EMPTY");
      product = [];
      return [...product];

    default:
      return product;
  }
};