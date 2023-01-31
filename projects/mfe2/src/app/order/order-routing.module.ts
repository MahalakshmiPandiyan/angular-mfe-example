import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/auth/src/public-api';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe2',
    pathMatch: 'full'
},
{
    path: 'mfe2',
    // canActivate:[AuthGuard],
    component: OrderComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
