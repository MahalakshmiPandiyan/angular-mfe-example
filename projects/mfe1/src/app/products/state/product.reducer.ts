import { createReducer, on } from "@ngrx/store";
import { getAllProductsSuccess } from "./product.action";
import { initialState } from "./product.state"; 

const _productReducer = createReducer(
    initialState,
    on(getAllProductsSuccess,(state:any,action:any) =>{
        console.log("action.products : ",action.products);
        console.log("state : ",state);
        
        return{
            ...state,
            products:action.products
        }
    })
    );

export function productReducer(state:any, action:any){
    return _productReducer(state,action);
}