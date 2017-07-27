import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

//Component imports
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppDashboardComponent } from './components/app-dashboard/app-dashboard.component';
import { AppProfileComponent } from './components/app-profile/app-profile.component';
import { AppRegisterComponent } from './components/app-register/app-register.component';

//Service imports
import { AppInputValidateService } from './services/app-input-validate/app-input-validate.service';
import { AppAuthService } from './services/app-auth/app-auth.service';

//Module imports
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule,
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
    AppInputValidateService,
    AppAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
