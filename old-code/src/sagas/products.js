import { call, put } from "redux-saga/effects";
import ApiProducts from "../api/products";

// fetch the product's list
export function* productsFetchList(action) {
  // call the api to get the products list
  const products = yield call(ApiProducts.getList);

  // save the products in state
  yield put({
    type: 'PRODUCTS_LIST_SAVE',
    products: products,
  });
}

// add/edit a product
export function* productsAddEdit(action) {
  // call the api to add/edit the product
  yield call(ApiProducts.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the product
  yield put({
    type: action.product.id ? 'PRODUCTS_EDIT_SAVE' : 'PRODUCTS_ADD_SAVE',
    product: action.product,
  });

  // success
  action.callbackSuccess();
}
