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
  constructor(private _ProductsService:ProductsService){
    this.inCard = _ProductsService.addToCard()
  }
  delete(product:Product){
    // const storedArray = JSON.parse(localStorage.getItem('myObjects') || '[]');
    // const updatedArray = storedArray.filter((item: any) => item.id !== product.id);
    // localStorage.setItem('myObjects', JSON.stringify(updatedArray));
    for(let i = 0; i < this.inCard.length; i++){
      if(product.name == this.inCard[i].name){
        this.inCard.splice(i, 1);
        break;
      }
    }
    // console.log(`Item with id ${product.id} removed from localStorage. Updated array:`, updatedArray);
  }
  confirm(){
    if(this.inCard.length != 0){
      // localStorage.setItem('myObjects', JSON.stringify(this.inCard));
      alert("Operation Confirmed!")
    }
    else
      alert("There is nothing in the cart!!")
    // console.log('Array added to localStorage:', this.inCard);
  }
}
