import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
const routes: Routes = [
  {path: '', 
    loadChildren: () => import('./user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule),
},
  {path :'application',
  loadChildren:()=>import('../../projects/my-library/src/lib/my-library.module').then(m=>m.MyLibraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,UserAuthenticationModule],//forRoot sirf app.routing.module ke liye ,rest ke liye forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
