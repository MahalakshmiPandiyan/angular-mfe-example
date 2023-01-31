import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;
  let baseUrl = "http://localhost:3000/orders";
  let orders:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(OrderService);
    httpTestingController = TestBed.get(HttpTestingController);
    orders = {
      product_id : 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      order_id: 1,
      quantity: 3,
      location: "VDM"
    }


  });
  beforeEach(inject(
    [OrderService],
    (service: OrderService) => {
      service = service;
    }
  ));

  it("should return data", () => {
    let result:any;
    service.getOrder().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
    req.flush([orders]);
    expect(result[0]).toEqual(orders);
  });

});
