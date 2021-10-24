import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    loading: false,
    error: '',
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //Control the added item.
            let addedItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id,
            );
            //If item added before. Return the existing state
            if (addedItem) {
                return { ...state, cartItems: state.cartItems };
                //If item not added before. Its new item.
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        case REMOVE_FROM_CART:
            console.log(action.payload.id);
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload,
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
