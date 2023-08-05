import {
    PRODUCT_LIST,
    SEARCH_PRODUCT_LIST,
    SET_PRODUCT_LIST,
    SEARCH_PRODUCT_ID
  } from "./constant";
  import { takeEvery, put } from "redux-saga/effects";
  
  function* getProducts() {
    let data = yield fetch("https://fakestoreapi.com/products");
    data = yield data.json();
    console.warn(data);
    yield put({ type: SET_PRODUCT_LIST, data: data });
  }
  
  function* getSearchProducts(data) {
    console.log(data)
    let result = yield fetch(`https://fakestoreapi.com/products/category/${data.query}`);
    console.log(data);
    console.log(result)
    result = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, data: result });
  }

  function* getProductsByID(id) {
    console.log(data)
    let result = yield fetch(`https://fakestoreapi.com/products/${data.id}`);
    console.log(data);
    console.log(result)
    result = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, data: result });
  }
  
  function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT_LIST, getSearchProducts);
    yield takeEvery(SEARCH_PRODUCT_ID,getProductsByID);
  }
  export default productSaga;