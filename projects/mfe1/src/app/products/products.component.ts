import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllProducts } from './state/product.action';
import { getProducts } from './state/product.selector';
import { AppState, ProductList } from './store/app.state';
import { filter } from 'rxjs/operators';  

@Component({
  selector: 'app-products',
  templateUrl: '/products.component.html',
  styleUrls: ['/products.component.scss']
})
export class ProductsComponent implements OnInit{

  public productList:any;
  filteredString:string='';
  
  constructor(private store : Store<AppState>,private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(getAllProducts());
    this.store.select(getProducts).subscribe((data)=>{
      this.productList  = data;    
    });
    console.log("productListttttt",this.productList);

  }
  options = ["men's clothing","jewelery","electronics","women's clothing","all"]

  addNewProduct(){
    this.router.navigate(["products/add"])
  }
  filter(){
    this.store.select(getProducts).subscribe((data)=>{
      this.productList  = data;

      if(this.filteredString==="all"){
        this.productList=data
      }
      else{
        this.productList = this.productList.filter((products: { category: string; }) =>  products.category === this.filteredString);  
        console.log("example",this.productList);
      }
    });
  
  }

}