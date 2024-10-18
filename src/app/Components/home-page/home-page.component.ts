import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './children/header/header.component';
import { FooterComponent } from './children/footer/footer.component';
import { AboutUsComponent } from './children/about-us/about-us.component';
import { ReviewsComponent } from './children/reviews/reviews.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../Modules/products.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutUsComponent,
    ReviewsComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _ProductsService:ProductsService) {}
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  menushown():boolean{
    return this._ProductsService.menuClicked;
  }
}
