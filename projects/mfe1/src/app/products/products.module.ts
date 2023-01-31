import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postEffects } from './state/product.efforts';
import { productReducer } from './state/product.reducer';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    ProductsComponent,
    AddNewProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature([postEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: true,
    }),
  ],
})
export class ProductsModule { }
