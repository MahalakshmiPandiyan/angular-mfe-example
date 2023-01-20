import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("https://273fe632-a99d-4e78-8c3d-a650fa92b632.mock.pstmn.io/products")
  }
}
