import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuPageComponent } from './Components/menu-page/menu-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './Components/home-page/children/about-us/about-us.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { AddToCartPageComponent } from './Components/add-to-cart-page/add-to-cart-page.component';

export const routes: Routes = [
  {path: 'home',title: "Home", component: HomePageComponent},
  {path: 'menu',title: "Our Menu", component: MenuPageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'cart', component: AddToCartPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: "**", title: "404", component: PageNotFoundComponent}
];
