import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cases',
  standalone: true,
  providers: [],
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent {
  panelOpenState = false;
}
