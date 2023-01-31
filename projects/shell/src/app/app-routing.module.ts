import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/auth/src/public-api';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:"products",loadChildren:()=>import('mfe1/products.module').then(m => m.ProductsModule)},
  {
    path:"products",
    canActivate:[AuthGuard],
    loadChildren:()=>
    loadRemoteModule({
    type:'module',
    remoteEntry:"http://localhost:5000/remoteEntry.js",
    exposedModule:'./Module',
  }).then((m)=>m.ProductsModule),
},
{
  path:"order",
  canActivate:[AuthGuard],
  loadChildren:()=>
  loadRemoteModule({
  type:'module',
  remoteEntry:"http://localhost:7000/remoteEntry.js",
  exposedModule:'./Module',
}).then((m)=>m.OrderModule),
},
{ 
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full' },
{
  path:"home",
  component:HomeComponent
},
{
  path:"login",
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
