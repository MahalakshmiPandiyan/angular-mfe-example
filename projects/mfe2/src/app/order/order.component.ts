import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OrderService } from './order.service';
import { getAllOrders } from './state/order.action';
import { getOrders } from './state/order.selector';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public orderList:any;
  constructor(private store : Store<AppState>) { }
  ngOnInit(): void {
    this.store.dispatch(getAllOrders());
    this.orderList = this.store.select(getOrders);
    console.log("orderListtt",this.orderList);
  }
}
