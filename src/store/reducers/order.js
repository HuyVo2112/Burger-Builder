import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    orders: [],
    loading: false,
    donePurchase: false,
}

const purchaseInit = (state, action) => {
    return updateObject(state, {donePurchase: false})
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId,
        
    }

    console.log(state.orders.concat(newOrder));

    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        donePurchase: true,
    })
}

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false})
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true})
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true})
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false, error: action.error})
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {loading: false, orders: action.orders})
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
       
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
           
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
            
            
            
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
            
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
           

        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
            

        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
            

        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
            
        default:
            return state;
    }
}

export default orderReducer;