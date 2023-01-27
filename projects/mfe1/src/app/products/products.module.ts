import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.state';
import { postEffects } from './state/product.efforts';
import { productReducer } from './state/product.reducer';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe,
    AddNewProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature([postEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: true,
    }),
  ],
  // exports:[
  //   ProductsComponent,
  //   FilterPipe
  // ]
})
export class ProductsModule { }
