import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReduer";

export default combineReducers({ cartData, productData });