import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

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
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    app._setDisableScroll(true)
  }

  backToLogin() {
    this.navCtrl.pop();
  }
}
