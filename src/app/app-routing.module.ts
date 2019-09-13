import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  {path:'superadmin',component:SuperadminComponent},
  {path:'page1',component:Page1Component},
  {path:'',redirectTo:'user',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
