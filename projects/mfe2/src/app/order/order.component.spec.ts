import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { OrderComponent } from './order.component';
import { getOrders } from './state/order.selector';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {

    const initialState = {
      'orders':      {
        product_id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        order_id: 1,
        quantity: 3,
        location: "VDM"
      } 
    }
    await TestBed.configureTestingModule({
      providers: [provideMockStore({initialState})],
      declarations: [ OrderComponent ],
    })
    .compileComponents();
  });

  beforeEach(() =>{
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
