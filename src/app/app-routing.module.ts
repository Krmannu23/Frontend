import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { UserGuard } from './user.guard';
const routes: Routes = [
  {path: '', 
    loadChildren: () => import('./user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule),
   },
  {path :'application',
  loadChildren:()=>import('../../projects/my-library/src/lib/my-library.module').then(m=>m.MyLibraryModule),
  canActivate:[UserGuard]
  }
];

@NgModule({
   //if you add your module in imports section then no need to define inside routes ,then you able to see lazy loading
   //if you declare like this then not able to see lzay loading   
   // imports: [RouterModule.forRoot(routes) ,UserAuthenticationModule]
  imports: [RouterModule.forRoot(routes)],//forRoot sirf app.routing.module ke liye ,rest ke liye forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
