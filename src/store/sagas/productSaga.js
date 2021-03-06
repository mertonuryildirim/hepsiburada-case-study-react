import { call, put, takeLatest } from '@redux-saga/core/effects';
import { listProductsService } from '../../utils/api';
import { LIST_PRODUCTS } from '../actions/actionTypes';
import {
    listProductsSuccess,
    listProductsError,
} from '../actions/productActions';

//worker saga.
function* handleListProducts(action) {
    try {
        const response = yield call(listProductsService, action.payload);
        yield put(listProductsSuccess(response.data));
    } catch (error) {
        yield put(listProductsError());
    }
}

//watcher saga.
export default function* watchListProductsSaga() {
    yield takeLatest(LIST_PRODUCTS, handleListProducts);
}
