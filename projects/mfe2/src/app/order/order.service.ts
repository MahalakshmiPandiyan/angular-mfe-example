import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrder(){
    return this.http.get("https://155f12d0-1061-4d48-b06e-d7bb6a441074.mock.pstmn.io/orders")
  }}
