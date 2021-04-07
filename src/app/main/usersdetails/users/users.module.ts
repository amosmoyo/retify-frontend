import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from '../login-users/login-users.component';
import { SignupUsersComponent } from '../signup-users/signup-users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginUsersComponent},
  { path: 'signup', component: SignupUsersComponent},
  { path: 'dashboard', loadChildren:()=>import('./../dashdetails/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)}
]

@NgModule({
  declarations: [LoginUsersComponent, SignupUsersComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersModule { }
