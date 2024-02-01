import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/Users';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  user: User | undefined;

  constructor() {}
}
