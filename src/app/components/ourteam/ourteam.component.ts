import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ourteam',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss'
})
export class OurteamComponent {

}
