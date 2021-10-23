import {
    LIST_PRODUCTS,
    LIST_PRODUCTS_ERROR,
    LIST_PRODUCTS_SUCCESS,
} from './actionTypes';

export const listProducts = (filteringData) => ({
    type: LIST_PRODUCTS,
    payload: filteringData,
});

export const listProductsSuccess = (products) => ({
    type: LIST_PRODUCTS_SUCCESS,
    payload: products,
});

export const listProductsError = () => ({
    type: LIST_PRODUCTS_ERROR,
});
