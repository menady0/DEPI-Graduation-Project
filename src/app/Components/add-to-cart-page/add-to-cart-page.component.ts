import { Component } from '@angular/core';
import { Product } from '../../Modules/Product';
import { ProductsService } from '../../Modules/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-to-cart-page.component.html',
  styleUrl: './add-to-cart-page.component.css'
})
export class AddToCartPageComponent {
  inCard:Product[]
  Products:Product[]
  constructor(private _ProductsService:ProductsService){
    this.inCard = _ProductsService.addToCard()
    this.Products = _ProductsService.getProducts()
  }
  delete(product:Product){
    for(let i = 0; i < this.inCard.length; i++){
      if(product.name == this.inCard[i].name){
        this.inCard.splice(i, 1);
        break;
      }
    }
    const index = this.Products.findIndex(obj => obj.name === product.name)
    this.Products[index].quantity = 0    
  }
  confirm(){
    alert("Operation Confirmed!")
  }
}
