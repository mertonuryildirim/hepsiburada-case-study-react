import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id,
            );
            if (addedItem) {
                return { ...state, cartItems: state.cartItems };
            } else {
                localStorage.setItem(
                    'cart',
                    JSON.stringify({
                        ...state,
                        cartItems: [...state.cartItems, action.payload],
                    }),
                );
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            }
        case REMOVE_FROM_CART:
            localStorage.setItem(
                'cart',
                JSON.stringify({
                    ...state,
                    cartItems: state.cartItems.filter(
                        (cartItem) => cartItem.id !== action.payload,
                    ),
                }),
            );
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
