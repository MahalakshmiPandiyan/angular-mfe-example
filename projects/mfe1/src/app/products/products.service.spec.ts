import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let baseUrl = "http://localhost:3000/products";
  let products:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.get(HttpTestingController);
    products = {
      id: 21,
      title: "Samsung 80cm LED Smart TV",
      price: 13000,
      description: "Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)",
      category: "electronics"
    }


  });
  beforeEach(inject(
    [ProductsService],
    (service: ProductsService) => {
      service = service;
    }
  ));

  it("should get products", () => {
    let result:any;
    service.getProduct().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
    console.log("products",products);
    
    req.flush([products]);
    expect(result[0]).toEqual(products);
  });

  it("should post products", () => {
    service.addNewProduct(products).subscribe();
    const req = httpTestingController.expectOne({
      method: "POST",
      url: baseUrl
    });    
    expect(req.request.body).toEqual(products);
  });
});
