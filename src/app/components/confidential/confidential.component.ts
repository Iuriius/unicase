import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-confidential',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './confidential.component.html',
  styleUrl: './confidential.component.scss'
})
export class ConfidentialComponent {

}
