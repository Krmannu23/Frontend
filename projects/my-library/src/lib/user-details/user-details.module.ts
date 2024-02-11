import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
import { UserSchoolingdetailsComponent } from './user-schoolingdetails/user-schoolingdetails.component';
import { UserschoolingdetailsComponent } from './userschoolingdetails/userschoolingdetails.component';



@NgModule({
  declarations: [
    BasicdetailsComponent,
    UserSchoolingdetailsComponent,
    UserschoolingdetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserDetailsModule { }
