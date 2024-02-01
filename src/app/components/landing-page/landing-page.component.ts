import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowAltRight, faLongArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FontAwesomeModule, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  faLongArrowRight = faLongArrowAltRight;
  faUser= faUser;
}
