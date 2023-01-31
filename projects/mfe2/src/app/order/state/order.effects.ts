import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { OrderService } from '../order.service';
import { getAllOrders, getAllOrdersSuccess } from './order.action';

@Injectable()
export class postEffects {
  constructor(
    private action$: Actions,
    private orderService: OrderService
  ) {}

  orderDisplay$ =  createEffect(() => {
    return this.action$.pipe(
      ofType(getAllOrders),
      mergeMap((action) => {
        return this.orderService.getOrder().pipe(
          map((orders:any) => {
            console.log("orders",orders);
            
            return getAllOrdersSuccess({orders:orders})
          })
        );
      })
    );
  });


}

