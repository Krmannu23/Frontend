import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserresumeComponent } from './userresume/userresume.component';
import { Routes } from '@angular/router';
const routes:Routes=[
  {path:'resume',component:UserresumeComponent}
]


@NgModule({
  declarations: [
    UserresumeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserPerformanceModule { }
