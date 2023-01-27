import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path:'login',loadChildren:()=> import('./login/login.module')
  .then(m => m.LoginModule)},
  {
    path:"products",
    loadChildren:()=>
    loadRemoteModule({
    type:'module',
    remoteEntry:"http://localhost:5000/remoteEntry.js",
    exposedModule:'./Module',
  }).then((m)=>m.ProductsModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
