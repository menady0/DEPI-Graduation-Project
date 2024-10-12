import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './children/header/header.component';
import { FooterComponent } from './children/footer/footer.component';
import { AboutUsComponent } from './children/about-us/about-us.component';
import { ReviewsComponent } from './children/reviews/reviews.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutUsComponent, ReviewsComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
