import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/UserDetails';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [FontAwesomeModule, NavbarComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  faLink = faLink;
  userDetails: UserDetails | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUsersById(userId).subscribe({
      next: (data) => {
        this.userDetails = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('There was an error!', error);
        this.isLoading = false;
      },
      complete: () => console.log('Data was retreived successfully'),
    });
  }
}
