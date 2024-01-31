import { Component, Input } from '@angular/core';
import { User } from '../../models/Data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponentComponent {
 
  @Input()
  user: User | undefined;

  constructor() {}
}