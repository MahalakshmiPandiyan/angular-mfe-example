import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let router: Router;
  let productsValue = [
    {
      id: 21,
      title: 'Samsung 80cm LED Smart TV',
      price: 13000,
      description:
        'Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)',
      category: 'electronics',
    },
  ];

  beforeEach(async () => {
    const initialState = {
      products: {
        id: 21,
        title: 'Samsung 80cm LED Smart TV',
        price: 13000,
        description:
          'Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)',
        category: 'electronics',
      },
    };
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [provideMockStore({ initialState })],
      declarations: [ProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the details page', () => {
    const spy = spyOn(router, 'navigate');
    component.addNewProduct();
    console.log(
      'spy.calls.first().args[0]',
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    );

    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('products/add');
  });

  it('filter func', () => {
    component.filter();
    spyOn(component, 'filter');
    expect(component.filter).toHaveBeenCalled();
  });

  it('filter', () => {
    component.filter();
    spyOn(component, 'filter');
    component.filteredString = 'alll';
    expect(productsValue.filter((products: { category: string }) => products.category === 'electronics')).toEqual([
      {
        id: 21,
        title: 'Samsung 80cm LED Smart TV',
        price: 13000,
        description:
          'Samsung 80cm (32 Inches) Wondertainment Series HD ready LED Smart TV (Glossy Black)',
        category: 'electronics',
      },
    ]);
    // expect(console.log).toHaveBeenCalledWith(productsValue);
    expect(component.filter).toHaveBeenCalled();
  });


});
