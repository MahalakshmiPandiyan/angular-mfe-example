import { Pipe, PipeTransform } from '@angular/core';
import { AnyKeys } from 'mongoose';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString:string) {
    console.log("value",typeof value);
    
    if(filteredString==='' || filteredString==='all'){
      return value;
    }
    const filteredProducts = [];
    for(const item of value){
      if(item['category'] === filteredString){
        filteredProducts.push(item)
      }
    }
    return filteredProducts;
  }

}
