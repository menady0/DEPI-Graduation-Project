import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../../../Modules/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private _ProductsService:ProductsService, private route: ActivatedRoute){
    
  }
  menuClick() {
    this._ProductsService.menuClicked = !this._ProductsService.menuClicked;
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');
    if (menu != null && navlist != null) {
      menu.classList.toggle('bi-x');
      navlist.classList.toggle('open');
    }
  }
  hideSections():boolean {
    return this._ProductsService.menuClicked
  }

}
