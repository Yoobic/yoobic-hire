import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Register } from '../register/register';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class Signin {
  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    app._setDisableScroll(true)
  }

  signup() {
    this.navCtrl.push(Register);
  }

  login() {

  }
}
