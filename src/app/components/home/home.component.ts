import { Component } from '@angular/core';
import { HeroswiperComponent } from '../heroswiper/heroswiper.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroswiperComponent, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
