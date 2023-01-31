import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrdersState } from "./order.state";

const getOrdersState = createFeatureSelector<OrdersState>('orders');

export const getOrders = createSelector(getOrdersState,(state)=>{
    return state.orders;
});

