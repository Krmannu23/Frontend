import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { UserAcademicModule } from './user-academic/user-academic.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserPerformanceModule } from './user-performance/user-performance.module';



@NgModule({
  declarations: [
    MyLibraryComponent
  ],
  imports: [
    UserAuthenticationModule,
    UserAcademicModule,
    UserDetailsModule,
    UserPerformanceModule
  ],
  exports: [
    MyLibraryComponent
  ]
})
export class MyLibraryModule { }
