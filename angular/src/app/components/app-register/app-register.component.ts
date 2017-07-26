import { AppInputValidateService } from '../../services/app-input-validate/app-input-validate.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit 
{
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private inputValidateService: AppInputValidateService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  OnSubmit()
  {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    
    //validate input before register
    if(this.inputValidateService.ValidateUserRegister(user) == false)
    {
      this.flashMessagesService.show("error");
      return;
    }

    this.flashMessagesService.show("registering...");
  }

}
