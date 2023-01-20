import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: '/products.component.html',
  styleUrls: ['/products.component.scss']
})
export class ProductsComponent implements OnInit{

  public productList:any;
  constructor(private productsService:ProductsService) { }
  ngOnInit(): void {
    this.productsService.getProduct().subscribe(res=>{
        this.productList=res;
    })
    console.log("productList",this.productList);
    
  }
}