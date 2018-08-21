import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { productsFetchList, productsAddEdit } from './products';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'PRODUCTS_FETCH_LIST', productsFetchList),
    fork(takeLatest, 'PRODUCTS_ADD_EDIT', productsAddEdit),
  ];
}
