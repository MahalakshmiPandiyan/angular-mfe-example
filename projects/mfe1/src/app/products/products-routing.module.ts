import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { ProductsComponent } from './products.component';
import { AuthGuard } from 'projects/auth/src/public-api';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full'
},
{
    path: 'mfe1',
    component: ProductsComponent
},
{
  path: 'add',
  component: AddNewProductsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
