import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { UserAcademicModule } from './user-academic/user-academic.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserPerformanceModule } from './user-performance/user-performance.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApplicationHttpInterceptor } from './application-interceptor';
import { MyLibraryService } from './my-library.service';

//path ka value me never use /
const routes: Routes = [
 {path:'user' ,
  component:MyLibraryComponent,
  children:[
  //Lazy loding module

{ path: 'details', 
   loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule),
},
{ path: 'academic', 
  loadChildren: () => import('./user-academic/user-academic.module').then(m => m.UserAcademicModule),
 },
 { path: 'performance', 
 loadChildren: () => import('./user-performance/user-performance.module').then(m => m.UserPerformanceModule),
}]}
];

@NgModule({
  declarations: [
    MyLibraryComponent,FooterComponent,HeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    UserAcademicModule,
    UserDetailsModule,
    UserPerformanceModule
  ],
  exports: [
    MyLibraryComponent,
    RouterModule
  ],
  providers:[
    HttpClient,
    // {
    //   provide:Http,
    //   useFactory:httpFactory,
    //   deps:[XHRBackend,RequestOptions] //old concept used in project
    // },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ApplicationHttpInterceptor,
    multi: true
  },
  MyLibraryService
]
})
export class MyLibraryModule { }
