import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDashboardComponent } from '../../components/app-dashboard/app-dashboard.component';
import { AppLoginComponent } from '../../components/app-login/app-login.component';
import { AppRegisterComponent } from '../../components/app-register/app-register.component';
import { AppProfileComponent } from '../../components/app-profile/app-profile.component';

const appRoutes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'register', component: AppRegisterComponent },
  { path: 'profile', component: AppProfileComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }