import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path :'',
  loadChildren:()=>import('../../projects/my-library/src/lib/my-library.module').then(m=>m.MyLibraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//forRoot sirf app.routing.module ke liye ,rest ke liye forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
