import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.scss']
})
export class AddNewProductsComponent {
  addNewProduct: FormGroup;
  msg:any
  constructor(private route:Router,private productsService:ProductsService) {
    this.addNewProduct = new FormGroup({
      title: new FormControl('', {nonNullable:true,validators:[Validators.required]}),
      price: new FormControl('', {nonNullable:true,validators:[Validators.required]}),
      description:  new FormControl('',{nonNullable:true,validators:[Validators.required]}),
      category: new FormControl('',{nonNullable:true,validators:[Validators.required]}),
    });
  }
  onSubmit() {
    this.productsService.addNewProduct(this.addNewProduct.value).subscribe(res =>{
      console.log("res",res);
    })
    this.route.navigate(['products'])
  }
}
