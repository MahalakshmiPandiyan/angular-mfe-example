import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { getAllProducts, getAllProductsSuccess } from './product.action';

@Injectable()
export class postEffects {
  constructor(
    private action$: Actions,
    private productService: ProductsService
  ) {}

  productDisplay$ =  createEffect(() => {
    return this.action$.pipe(
      ofType(getAllProducts),
      mergeMap((action) => {
        return this.productService.getProduct().pipe(
          map((products:any) => {
            console.log("products",products);
            
            return getAllProductsSuccess({products:products})
          })
        );
      })
    );
  });


}

