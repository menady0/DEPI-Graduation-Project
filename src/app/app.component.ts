import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { AddToCartPageComponent } from './Components/add-to-cart-page/add-to-cart-page.component';
import { MenuPageComponent } from './Components/menu-page/menu-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, ContactPageComponent, AddToCartPageComponent, MenuPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  WebsiteTitle = 'CoffeeFly | Your go-to spot for drinks and desserts on the fly';
}
