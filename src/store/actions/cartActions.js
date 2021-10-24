import { ADD_TO_CART, FULL_FILL_CART, REMOVE_FROM_CART } from './actionTypes';

export const fullFillCart = () => ({
    type: FULL_FILL_CART,
});

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: cartItem,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});
