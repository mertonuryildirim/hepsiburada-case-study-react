import {
    LIST_PRODUCTS,
    LIST_PRODUCTS_ERROR,
    LIST_PRODUCTS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    limit: '',
    page: '',
    products: [],
    totalCount: '',
    loading: false,
    error: '',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PRODUCTS:
            return { ...state, loading: true, error: '' };
        case LIST_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                limit: action.payload.limit,
                page: action.payload.page,
                products: action.payload.products,
                totalCount: action.payload.totalCount,
            };
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
