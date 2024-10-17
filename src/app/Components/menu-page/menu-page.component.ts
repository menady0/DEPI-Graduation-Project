import { CommonModule } from '@angular/common';
import { Component, numberAttribute, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../Modules/products.service';
import { Product } from '../../Modules/Product';
import { FormsModule } from '@angular/forms';
import { AddToCartPageComponent } from '../add-to-cart-page/add-to-cart-page.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AddToCartPageComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent{
  showProducts:Product[];
  constructor(private _ProductsService:ProductsService){
    this.showProducts = _ProductsService.getProducts()
    this.cart = 0
  }
  showAll:boolean = false;
  getPro(){
    return this.showAll ? this.showProducts : this.showProducts.slice(0, 6);
  }
  btnToggle(){
    this.showAll = !this.showAll;
  }
  search(input:string){
    console.log(input);
    if(input != '')
      this.showProducts = this._ProductsService.search(input)
    else 
      this.showProducts = this._ProductsService.getProducts();
    // for(let i = 0; i < this.showProducts.length; i++){
    // }
  }
  add(card:Product, quantity:string){
    const parsedQuantity = +quantity; 
    if(quantity === ''){
      alert("Enter a number")
      return;
      // card.quantity = +quantity
    }
    else {
      if(card.quantity == parsedQuantity)
        card.quantity++
      else if (card.quantity > parsedQuantity){
        alert("Use - to decrease the number")
        card.quantity = card.quantity
      }
      else
        card.quantity = parsedQuantity
        // card.quantity++
    }
    // else if (parsedQuantity == card.quantity){
    //   console.log("3");
    //   card.quantity++
    // }
    // else if(parsedQuantity > card.quantity){
    //   console.log("1");
    //   card.quantity = parsedQuantity
    // }
    // else if(parsedQuantity < card.quantity){
    //   console.log("2");
    // }
    console.log(`Quantity in the object: ${card.quantity}`);
    this.addToCart()
  }


  remove(card:Product, quantity:string){
    console.log(quantity);
    console.log("remove");
    
    if(card.quantity != 0){
      if(card.quantity == +quantity){
        card.quantity--;
        console.log("1");
        
      }
      else if(card.quantity > +quantity){
        card.quantity -= +quantity
        console.log("2");
      }
      else {
        alert(`You only have ${card.quantity} in the cart`)
        // quantity = card.quantity
      }
    }
    else {
        alert("Nothing to remove")
    }
    // if(+quantity <= 0){
    //   alert("Nothing to remove")
    // }
    // else {
    //   if(+quantity > 0){
    //     for(let i = 0; i < this.showProducts.length; i++){
    //       if(this.showProducts[i].name == card.name){
    //         card.quantity -= +quantity;
    //       }
    //     }
    //   }
    //   else 
    //     card.quantity--;
    // }
    console.log(this.showProducts);
    this.addToCart()
  }

  // Add to cart
  cart:number
  addToCart():void {
    this.cart = 0
    // this.cart = 0
    for(let i = 0; i < this.showProducts.length; i++){
      this.cart += this.showProducts[i].quantity
    }
  }
  returnToCard():number{
    return 0
  }
}
