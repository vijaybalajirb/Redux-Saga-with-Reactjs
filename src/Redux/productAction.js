import { PRODUCT_LIST, SEARCH_PRODUCT_LIST,SEARCH_PRODUCT_ID } from "./constant";

export const ProductList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const ProductSearch = (query) => {
  return {
    type: SEARCH_PRODUCT_LIST,
    query,
  };
};

export const ProductSearchByID = (query) => {
    return {
      type: SEARCH_PRODUCT_ID,
      query,
    };
  };