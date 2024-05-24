import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, MatIconModule],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss'
})
export class OurteamComponent {

}
