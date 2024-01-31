import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { User } from '../../models/Users';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CardComponent, FormsModule, SearchComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  title = 'User List';
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText: string = '';
  isLoading=true;

  constructor(private userService: UserService, private router: Router) {}


  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    this.searchUsers();
  }

  searchUsers() {
    this.filteredUsers = this.users.filter((user) => {
      return user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.userService
      .getUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
          this.isLoading=false;
        },
        error: (error) => {
          console.log('There was an error!', error);
          this.isLoading=false;
        },
        complete: () => console.log('Data was retreived successfully'), 
      });
  }
}
