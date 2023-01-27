import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./product.state";

const getProductState = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(getProductState,(state)=>{
    console.log("state.products",state.products);
    
    return state.products;
});

