import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'ice coffee',
        price: 50,
        imgURL: 'Menu/ice coffe/IcedCoffee.jpeg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'mocha',
        price: 70,
        imgURL: 'Menu/ice coffe/Iced Caffè Mocha.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'espresso',
        price: 65,
        imgURL: 'Menu/ice coffe/Iced Espresso.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Honey Apple Almondmilk Flat White',
        price: 75,
        imgURL: 'Menu/ice coffe/Iced Honey Apple Almondmilk Flat White.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Iced Pecan Crunch Oatmilk Latte',
        price: 80,
        imgURL: 'Menu/ice coffe/Iced Pecan Crunch Oatmilk Latte.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Iced White Chocolate Mocha',
        price: 85,
        imgURL: 'Menu/ice coffe/Iced White Chocolate Mocha.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Nondairy Vanilla Sweet Cream Cold Brew',
        price: 90,
        imgURL: 'Menu/ice coffe/Nondairy Vanilla Sweet Cream Cold Brew.jpg',
        quantity: 0,
      },
      {
        id: 1,
        name: 'Pumpkin Cream Cold Brew',
        price: 95,
        imgURL: 'Menu/ice coffe/Pumpkin Cream Cold Brew.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'blueberry scones',
        price: 55,
        imgURL: 'Menu/dessert/blueberry scones.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'carrot cake',
        price: 45,
        imgURL: 'Menu/dessert/carrot cake.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'chocolate brownie',
        price: 60,
        imgURL: 'Menu/dessert/chocolate brownie.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'cinnamon coffee cake',
        price: 65,
        imgURL: 'Menu/dessert/cinnamon coffee cake.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'cinnamon-roll',
        price: 60,
        imgURL: 'Menu/dessert/cinnamon-roll-recipe.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'new york cheesecake',
        price: 75,
        imgURL: 'Menu/dessert/new york cheesecake.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'pancake',
        price: 50,
        imgURL: 'Menu/dessert/pancake.jpg',
        quantity: 0,
      },
      {
        id: 2,
        name: 'scone muffins',
        price: 80,
        imgURL: 'Menu/dessert/scone muffins.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Apple Crisp Oatmilk Macchiato',
        price: 50,
        imgURL: 'Menu/hot coffe/Apple Crisp Oatmilk Macchiato.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Caffè Americano',
        price: 50,
        imgURL: 'Menu/hot coffe/CAFFÈ AMERICANO.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Caffè Misto',
        price: 55,
        imgURL: 'Menu/hot coffe/CaffŠ Misto.png',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Caffè Mocha',
        price: 60,
        imgURL: 'Menu/hot coffe/CaffŠ Mocha.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Flat White',
        price: 60,
        imgURL: 'Menu/hot coffe/Flat White.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 60,
        imgURL: 'Menu/hot coffe/Cappuccino.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'Pecan Crunch Oatmilk Latte',
        price: 70,
        imgURL: 'Menu/hot coffe/Pecan Crunch Oatmilk Latte.jpg',
        quantity: 0,
      },
      {
        id: 3,
        name: 'White Chocolate Mocha',
        price: 80,
        imgURL: 'Menu/hot coffe/White Chocolate Mocha.jpg',
        quantity: 0,
      },
    ];
  }
  getProducts(): Product[] {
    return this.products;
  }
  search(input: string): Product[] {
    return this.products.filter((product) => product.name.toLocaleLowerCase().includes(input));
  }
  addToCard(): Product[]{
    return this.products.filter(pro => pro.quantity > 0)
  }
  cartCount: number = 0;
  counting():number{
    for(let i = 0; i < this.products.length; i++){
      this.cartCount += this.products[i].quantity
    }
    return this.cartCount;
  }
}
