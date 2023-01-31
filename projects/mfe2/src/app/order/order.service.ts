import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  readonly baseUrl='http://localhost:3000/';

  getOrder(){
    return this.http.get(this.baseUrl+"orders")
  }}
