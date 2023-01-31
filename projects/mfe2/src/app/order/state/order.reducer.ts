import { createReducer, on } from "@ngrx/store";
import { getAllOrdersSuccess } from "./order.action";
import { initialState } from "./order.state"; 

const _orderReducer = createReducer(
    initialState,
    on(getAllOrdersSuccess,(state:any,action:any) =>{
        console.log("action.orders : ",action.orders);
        console.log("state : ",state);
        
        return{
            ...state,
            orders:action.orders
        }
    })
    );

export function orderReducer(state:any, action:any){
    return _orderReducer(state,action);
}