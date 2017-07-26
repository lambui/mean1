import { Injectable } from '@angular/core';

@Injectable()
export class AppInputValidateService {

  constructor() { }

  ValidateUserRegister(user): Boolean
  {
    if(
      user.name == undefined ||     user.name == "" ||
      user.username == undefined || user.username == "" ||
      user.email == undefined ||    user.email == "" || this.ValidateEmail(user.email) == false ||
      user.password == undefined || user.password == ""
    ) {
      return false;
    }
    return true;
  }

  ValidateEmail(email): Boolean
  {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
