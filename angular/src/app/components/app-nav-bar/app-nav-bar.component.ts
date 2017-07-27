import { AppAuthService } from '../../services/app-auth/app-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent implements OnInit {

  constructor(
    private authService: AppAuthService
  ) { }

  ngOnInit() {
  }

}
