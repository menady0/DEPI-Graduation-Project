import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class MenuPageComponent implements OnInit{
  showProducts:Product[];

  constructor(private _ProductsService:ProductsService){
    this.showProducts = _ProductsService.getProducts()
    this.cart = 0
  }

  ngOnInit(): void {
    this.cart = this._ProductsService.counting();    
  }
  showAll:boolean = false;
  getPro(){
    return this.showAll ? this.showProducts : this.showProducts.slice(0, 6);
  }
  btnToggle(){
    this.showAll = !this.showAll;
    if (!this.showAll) {
      window.scrollTo(0, 0);
    }
  }
  search(input:string){
    if(input != '')
      this.showProducts = this._ProductsService.search(input)
    else 
      this.showProducts = this._ProductsService.getProducts();
  }
  add(card:Product, quantity:string){
    const parsedQuantity = +quantity; 
    if(quantity === ''){
      alert("Enter a number")
      return;
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
    }
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
      }
    }
    else {
        alert("Nothing to remove")
    }
    this._ProductsService.counting()
  }

  // Add to cart
  cart:number
  addToCart():void {
    this.cart = 0
    for(let i = 0; i < this.showProducts.length; i++){
      this.cart += this.showProducts[i].quantity
    }
  }
  onKeyDown(event:KeyboardEvent, input:string){
    if (event.key === 'Enter') {
      this.search(input)
    }
  }
  quantityPress(event:KeyboardEvent, product:Product, input:string){
    if(event.key === "Enter"){
      this.add(product, input)
    }
  }
}
