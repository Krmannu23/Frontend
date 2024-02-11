import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';



@NgModule({
  declarations: [
    UserloginComponent,
    UserregisterComponent,
    UserlogoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAuthenticationModule { }
