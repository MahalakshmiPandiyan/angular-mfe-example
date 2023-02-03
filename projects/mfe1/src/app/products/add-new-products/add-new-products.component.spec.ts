import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';   
import { AddNewProductsComponent } from './add-new-products.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddNewProductsComponent', () => {
  let component: AddNewProductsComponent;
  let fixture: ComponentFixture<AddNewProductsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewProductsComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule,RouterTestingModule.withRoutes([]),
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewProductsComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('initial values',() =>{
  //   const loginFormGroup = component.addNewProduct;
  //   const loginFormValues = {
  //     title:'',
  //     price:'',
  //     description:'',
  //     category:''
  //   }
  //   expect(loginFormGroup.value).toEqual(loginFormValues);
  // });

  it('should allow user to log in', () => {
    const formData = {
      "title": "Samsung 80cm LED Smart TV",
      "price": 1234,
      "description": "Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)",
      "category": "electronics",
    };
    component.addNewProduct.setValue(formData);
    const spy = spyOn(router, 'navigate');
    component.onSubmit();
    console.log("spy.calls.first().args[0]",(spy.calls.first().args[0]).toString().replace("[","").replace("'",""));
    
    expect((spy.calls.first().args[0]).toString().replace("[","").replace("'","")).toContain("products");
  });

  // it('should call Router.navigate', () => {

  // });

  it('check title value', () => {
    const form: FormGroup = component.addNewProduct;

    const title = form.get('title');
    expect(title?.valid).toBeFalsy();

    title?.setValue('');
    expect(title?.hasError('required')).toBeTruthy();

    title?.setValue('Samsung 80cm LED Smart TV');
    expect(title?.hasError('required')).toBeFalsy();
  });

  // it("onSubmit",() =>{
  //   component.onSubmit();
  //   let result:any;
  //   service.getProduct().subscribe(t => {
  //     result = t;
  //   });
  //   const req = httpTestingController.expectOne({
  //     method: "GET",
  //     url: baseUrl
  //   });
  //   console.log("products",products);

  //   req.flush([products]);
  //   expect(result[0]).toEqual(products);
  // })



});