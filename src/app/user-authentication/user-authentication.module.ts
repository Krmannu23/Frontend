import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:UserloginComponent},
  {path:'register',component:UserregisterComponent},
  {path:'logout',component:UserlogoutComponent}
]

@NgModule({
  declarations: [
    UserloginComponent,
    UserregisterComponent,
    UserlogoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class UserAuthenticationModule { }
