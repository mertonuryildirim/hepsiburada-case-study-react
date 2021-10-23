import { all } from 'redux-saga/effects';
import watchListProductsSaga from './productSaga';

//root saga
export default function* rootSaga() {
    yield all([watchListProductsSaga()]);
}
