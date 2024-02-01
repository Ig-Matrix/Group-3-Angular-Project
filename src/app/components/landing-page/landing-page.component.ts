import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLongArrowAltRight, faLongArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [FontAwesomeModule]
})
export class LandingPageComponent {
  faLongArrowRight = faLongArrowAltRight;
  faUser= faUser;


}
