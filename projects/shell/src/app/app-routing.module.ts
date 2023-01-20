import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"products",loadChildren:()=>import('mfe1/products.module').then(m => m.ProductsModule)},
  {
    path:"products",
    loadChildren:()=>
    loadRemoteModule({
    type:'module',
    remoteEntry:"http://localhost:5000/remoteEntry.js",
    exposedModule:'./Module',
  }).then((m)=>m.ProductsModule),
},
{
  path:"order",
  loadChildren:()=>
  loadRemoteModule({
  type:'module',
  remoteEntry:"http://localhost:7000/remoteEntry.js",
  exposedModule:'./Module',
}).then((m)=>m.OrderModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
