import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppAuthService } from '../app-auth/app-auth.service';

@Injectable()
export class AppAuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AppAuthService
  ) { }

  canActivate()
  {
    if(this.authService.LoggedIn())
      return true;
    else
    {
      this.router.navigate(['/login']);
      return false;
    }  
  }
}
