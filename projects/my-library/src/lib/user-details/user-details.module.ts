import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
import { UserschoolingdetailsComponent } from './userschoolingdetails/userschoolingdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { UsercollegedetailsComponent } from './usercollegedetails/usercollegedetails.component';
import { UsersemesterwiseMarksComponent } from './usercollegedetails/usersemesterwise-marks/usersemesterwise-marks.component';
import { AddressdetailsComponent } from './addressdetails/addressdetails.component';
import { BasicResolver } from '../Resolver/BasicResolver';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicdetailsComponent,
    data:{
      currentPage:'basic',
      refList:[
        'initials',
        'country'
      ]
    },
    resolve:{basicPageData:BasicResolver}
  },
  {
    path: 'schooling',
    component: UserschoolingdetailsComponent,
  },
  {
    path: 'college',
    component: UsercollegedetailsComponent,
  },
];

@NgModule({
  declarations: [
    BasicdetailsComponent,
    UserschoolingdetailsComponent,
    UsercollegedetailsComponent,
    UsersemesterwiseMarksComponent,
    AddressdetailsComponent
  ],
  
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserDetailsModule { }
//Testing :http://localhost:4200/application/details/basic