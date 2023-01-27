import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { getAllProducts } from './state/product.action';
import { getProducts } from './state/product.selector';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-products',
  templateUrl: '/products.component.html',
  styleUrls: ['/products.component.scss']
})
export class ProductsComponent implements OnInit{

  public productList:any;
  filteredString:string='';
  
  constructor(private productsService:ProductsService,private store : Store<AppState>,private router: Router) { }

  counter$: Observable<{ counter: number; }> | undefined;

  ngOnInit(): void {
    this.store.dispatch(getAllProducts());
    this.productList = this.store.select(getProducts);
    // this.productsService.getProduct().subscribe(res=>{
      //     this.productList=res;
    // })
    console.log("productList",this.productList);
  }
  options = ["men's clothing","jewelery","electronics","women's clothing","all"]

  selectedValue = '';

  addNewProduct(){
    this.router.navigate(["products/add"])
  }

}