import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from './state/order.reducer';
import { EffectsModule } from '@ngrx/effects';
import { postEffects } from './state/order.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    StoreModule.forFeature('orders',orderReducer),
    EffectsModule.forFeature([postEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: true,
    }),
  ]
})
export class OrderModule { }
