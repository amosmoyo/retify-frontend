import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/homedetails/home/home.component';
import { Notfound404Component } from './main/homedetails/notfound404/notfound404.component';
import { SharedModule } from './main/shared/shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren:()=>import('./main/usersdetails/users/users.module').then(m => m.UsersModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: Notfound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
  declarations: [ Notfound404Component, HomeComponent ]
})
export class AppRoutingModule { }
