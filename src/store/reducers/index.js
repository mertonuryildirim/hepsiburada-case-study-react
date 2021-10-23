import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
});

export default rootReducer;
