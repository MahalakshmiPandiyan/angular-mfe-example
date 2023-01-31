import { orderReducer } from "../state/order.reducer"; 
import { OrdersState } from "../state/order.state";

export interface AppState {
    orders : OrdersState;
}

export const appReducer = {
    orders : orderReducer
}