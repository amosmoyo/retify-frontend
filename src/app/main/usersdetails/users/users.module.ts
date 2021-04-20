import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from '../login-users/login-users.component';
import { SignupUsersComponent } from '../signup-users/signup-users.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupCompanyComponent } from '../signup-users/company/signup-company/signup-company.component';
import { SignupNormalusersComponent } from '../signup-users/normal-user/signup-normalusers/signup-normalusers.component';
import { MaterialModule } from 'src/app/material.module';
import { UsigninComponent } from '../login-users/signin/usignin/usignin.component';
import { CsigninComponent } from '../login-users/signin/csignin/csignin.component';
import { ValidateEqualModule } from 'ng-validate-equal';

const routes: Routes = [
  { path: 'login', component: LoginUsersComponent,
    children: [
      {
        path: 'user',
        component: UsigninComponent
      },
      {
        path: 'organization',
        component: CsigninComponent
      }
    ]
  },
  { path: 'signup', component: SignupUsersComponent,
   children: [
     {
       path:'user',
       component: SignupNormalusersComponent
     },
     {
       path: 'organization',
       component: SignupCompanyComponent
     }
   ]
  },
  { path: 'dashboard', loadChildren:()=>import('./../dashdetails/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)}
]

@NgModule({
  declarations: [LoginUsersComponent, SignupUsersComponent, SignupNormalusersComponent, SignupCompanyComponent, CsigninComponent, UsigninComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    FormsModule,  MaterialModule, ValidateEqualModule
  ],
  exports: [RouterModule]
})
export class UsersModule { }
