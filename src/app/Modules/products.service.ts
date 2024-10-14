import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[]
  constructor() { 
    this.products = [
      {id:1, name:"x", price:1, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:2, name:"x1", price:2, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:3, name:"x2", price:3, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:4, name:"x3", price:4, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:5, name:"x4", price:5, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:6, name:"x5", price:6, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:7, name:"x6", price:7, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
      {id:8, name:"x7", price:8, imgURL:"Menu/IcedCoffee.jpeg", quantity: 0},
    ];
  }
  getProducts():Product[]{
    return this.products;
  }
  search(input:string):Product[]{
    return this.products.filter(product => product.name == input)
  }
}
