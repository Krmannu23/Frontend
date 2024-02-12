import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadonlyTenthComponent } from './readonly-tenth/readonly-tenth.component';
import { ReadonlyTwelfthComponent } from './readonly-twelfth/readonly-twelfth.component';
import { ReadonlyCollegeComponent } from './readonly-college/readonly-college.component';

const routes:Routes=[
  {path:'tenth',component:ReadonlyTenthComponent},
  {path:'Twelfth',component:ReadonlyTwelfthComponent},
  {path:'college',component:ReadonlyCollegeComponent}
]

@NgModule({
  declarations: [
    ReadonlyTenthComponent,
    ReadonlyTwelfthComponent,
    ReadonlyCollegeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]

})
export class UserAcademicModule { }
