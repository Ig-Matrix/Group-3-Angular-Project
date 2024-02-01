import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
    {path: '', title:'Home', component: LandingPageComponent},
    {path: 'users', title:'Users', component: UserListComponent},
    { path: 'user/:id', component: UserDetailsComponent },
    { path: '**', title:'404', component: Error404Component },
];
