import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";

import { AddNewProductsComponent } from './add-new-products.component';
import { ProductsService } from '../products.service';

describe('AddNewProductsComponent', () => {
  let component: AddNewProductsComponent;
  let fixture: ComponentFixture<AddNewProductsComponent>;
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let baseUrl = "http://localhost:3000/products";
  let products:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProductsComponent ],
      imports: [FormsModule,ReactiveFormsModule,HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('initial values',() =>{
    const loginFormGroup = component.addNewProduct;
    const loginFormValues = {
      title:'',
      price:'',
      description:'',
      category:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

  // it('should allow user to log in', () => {
  //   const formData = {
  //     "title": "Samsung 80cm LED Smart TV",
  //     "price": 1234,
  //     "description": "Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)",
  //     "category": "electronics",
  //   };
  //   component.addNewProduct.setValue(formData);
  //   // component.onSubmit();
  //   // expect(component.onSubmit).toHaveBeenCalled();
  // });

  it("check title value",()=>{
    const form: FormGroup = component.addNewProduct;

    const title = form.get("title");
    expect(title?.valid).toBeFalsy();

    title?.setValue("");
    expect(title?.hasError("required")).toBeTruthy();

    title?.setValue("Samsung 80cm LED Smart TV");
    expect(title?.hasError("required")).toBeFalsy();

  });

  it("onSubmit",() =>{
    component.onSubmit();
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
  })
});
