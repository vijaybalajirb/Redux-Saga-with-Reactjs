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
    data.map((val)=>(
      val.item = 1
  ))
    yield put({ type: SET_PRODUCT_LIST, data: data });
  }
  
  function* getSearchProducts(data) {
    let result = yield fetch(`https://fakestoreapi.com/products/category/${data.query}`);
    result = yield result.json();
    result.map((val)=>(
      val.item = 1
  ))
    yield put({ type: SET_PRODUCT_LIST, data: result });
  }

  function* getProductsByID(id) {
    let result = yield fetch(`https://fakestoreapi.com/products/${data.id}`);
    result = yield result.json();
    result.map((val)=>(
      val.item = 1
  ))
    yield put({ type: SET_PRODUCT_LIST, data: result });
  }
  
  function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT_LIST, getSearchProducts);
    yield takeEvery(SEARCH_PRODUCT_ID,getProductsByID);
  }
  export default productSaga;