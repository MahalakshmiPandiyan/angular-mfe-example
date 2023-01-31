import { createAction, props } from "@ngrx/store";

export const GET_ORDERS = 'getOrders';
export const GET_ORDERS_SUCCESS = 'getOrderSuccess';

export const getAllOrders = createAction(GET_ORDERS);
    
export const getAllOrdersSuccess = createAction(GET_ORDERS_SUCCESS,
    props<{orders:any}>());