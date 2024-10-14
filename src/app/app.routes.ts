import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuPageComponent } from './Components/menu-page/menu-page.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'menu', component: MenuPageComponent}
];
