import { AppAuthService } from '../../services/app-auth/app-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AppAuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  OnSubmit()
  {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.AuthenticateUser(user)
                    .subscribe(data => {
                      if(data.success == false)
                      {
                        this.flashMessagesService.show("fail to login: " + data.msg);
                        this.router.navigate(['/login']);
                      }
                      else
                      {
                        this.flashMessagesService.show("successfully login as " + data.user.username);
                        this.authService.StoreUserData(data.token, data.user);
                        this.router.navigate(['/']);
                      }
                    });
  }

  Logout()
  {
    this.authService.Logout();
    this.flashMessagesService.show("successfully log out!");
    this.router.navigate(['/']);
  }
}
