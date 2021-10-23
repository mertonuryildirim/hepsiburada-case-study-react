import {
    LIST_PRODUCTS,
    LIST_PRODUCTS_ERROR,
    LIST_PRODUCTS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: '',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCTS:
            return { ...state, loading: true, error: '' };
        case LIST_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case LIST_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: 'Error fetching products.!',
            };
        default:
            return state;
    }
};

export default productReducer;
