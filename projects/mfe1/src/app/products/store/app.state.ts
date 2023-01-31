import { productReducer } from "../state/product.reducer";
import { ProductsState } from "../state/product.state";

export interface AppState {
    products : ProductsState;
}

export const appReducer = {
    products : productReducer
}

export interface ProductList{
    id:number,
    title: string,
    price: number,
    description: string,
    category: string
}