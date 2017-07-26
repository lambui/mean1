import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Component imports
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppProfileComponent } from './components/app-profile/app-profile.component';
import { AppRegisterComponent } from './components/app-register/app-register.component';

//Module imports
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppLoginComponent,
    AppDashboardComponent,
    AppProfileComponent,
    AppRegisterComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
