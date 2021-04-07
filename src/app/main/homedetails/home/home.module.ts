import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
