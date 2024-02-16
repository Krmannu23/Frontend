import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { UserAcademicModule } from './user-academic/user-academic.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserPerformanceModule } from './user-performance/user-performance.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//path ka value me never use /
const routes: Routes = [
 {path:'' ,
  component:MyLibraryComponent,
  children:[
  //Lazy loding module
{ path: ':auth', 
    loadChildren: () => import('./user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule),
},
{ path: ':details', 
   loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule),
},
{ path: ':academic', 
  loadChildren: () => import('./user-academic/user-academic.module').then(m => m.UserAcademicModule),
 },
 { path: ':performance', 
 loadChildren: () => import('./user-performance/user-performance.module').then(m => m.UserPerformanceModule),
}]}
];

@NgModule({
  declarations: [
    MyLibraryComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    UserAuthenticationModule,
    UserAcademicModule,
    UserDetailsModule,
    UserPerformanceModule
  ],
  exports: [
    MyLibraryComponent,
    RouterModule
  ]
})
export class MyLibraryModule { }
