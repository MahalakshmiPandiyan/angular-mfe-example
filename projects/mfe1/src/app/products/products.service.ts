import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  readonly baseUrl='http://localhost:3000/';
  getProduct(){
    return this.http.get(this.baseUrl+"products")
  }

  addNewProduct(value:any){
    return this.http.post(this.baseUrl+"products",value)
  }
}
