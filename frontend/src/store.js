import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducers, productDetailsReducer} from './reducer/productReducers';
import {cartReducer} from './reducer/cartReducers';
import {userLoginReducer} from './reducer/userReducers';


const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

const cartItemFromStorge = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorge = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {cartItems: cartItemFromStorge}و
    userLogin: {userInfo: userInfoFromStorge}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store