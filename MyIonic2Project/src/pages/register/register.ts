import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Signin } from '../signin/signin';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  backToLogin() {
    this.navCtrl.pop();
  }
}
