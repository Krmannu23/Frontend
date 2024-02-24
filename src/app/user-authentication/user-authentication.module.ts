import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserHttpInterceptor } from '../user-interceptor';

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
  exports:[RouterModule],
  providers:[
    HttpClient,
    // {
    //   provide:Http,
    //   useFactory:httpFactory,
    //   deps:[XHRBackend,RequestOptions] //old concept used in project
    // },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserHttpInterceptor,
    multi: true
  }
]
})
export class UserAuthenticationModule { }
