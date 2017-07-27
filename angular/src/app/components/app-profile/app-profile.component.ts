import { AppAuthService } from '../../services/app-auth/app-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css']
})
export class AppProfileComponent implements OnInit {
  user: any;

  constructor(
    private authService: AppAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.GetUserProfile()
                    .subscribe(profile => {
                      this.user = profile.user;
                    },
                    err => {
                      console.log('err: ' + err);
                    });
  }

}
