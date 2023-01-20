import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public orderList:any;
  constructor(private ordersService:OrderService) { }
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe(res=>{
        this.orderList=res;
    })
    console.log("orderList",this.orderList);
    
  }
}
