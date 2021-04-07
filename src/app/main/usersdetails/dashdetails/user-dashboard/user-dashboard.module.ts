import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/main/shared/shared/shared.module';

const routes:Routes = [
  {path: '', component: UserDashboardComponent}
]
@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), SharedModule
  ],
  exports:[RouterModule]
})
export class UserDashboardModule { }
