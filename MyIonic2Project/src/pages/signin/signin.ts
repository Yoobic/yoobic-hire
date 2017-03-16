import { Component } from '@angular/core';
import { App, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth, User, UserDetails } from '@ionic/cloud-angular';

import { Register } from '../register/register';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class Signin {
  email: string;
  password: string;

  constructor(
    private app: App,
    public auth: Auth,
    public user: User,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    app._setDisableScroll(true)
  }

  signup() {
    this.navCtrl.push(Register);
  }

  login() {
    let details: UserDetails = {
      'email': this.email,
      'password': this.password
    }
    this.auth.login(details)
      .then(
        this.authSuccess.bind(this),
        this.authError.bind(this)
      )
  }

  authSuccess() {
    setTimeout(() => {
      this.navCtrl.setRoot(Dashboard)
    }, 500)
  }

  authError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'There was an error with your email or password',
      buttons: ['Continue']
    })
  }
}
