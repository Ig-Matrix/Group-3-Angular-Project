import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/Users';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  faEnvelope= faEnvelope;
  @Input()
  user: User | undefined;

  constructor() {}
}
