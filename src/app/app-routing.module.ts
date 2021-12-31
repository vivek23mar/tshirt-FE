import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./component/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./component/signup/signup.module').then(m => m.SignupModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
