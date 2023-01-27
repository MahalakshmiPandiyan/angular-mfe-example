import { createAction, props } from "@ngrx/store";

export const GET_PRODUCTS = 'getProducts';
export const GET_PRODUCTS_SUCCESS = 'getProducts Success';

export const getAllProducts = createAction(GET_PRODUCTS);
    
export const getAllProductsSuccess = createAction(GET_PRODUCTS_SUCCESS,
    props<{products:any}>());