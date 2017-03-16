import { Component } from '@angular/core';
import { App, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Auth, User, UserDetails } from '@ionic/cloud-angular';

import { Register } from '../register/register';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class Signin {
  username: string;
  password: string;

  constructor(
    private app: App,
    // public auth: Auth,
    // public user: User,
    // public userDetails: UserDetails,
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
    if (this.username === 'admin@admin.com' && this.password === '1234') {
      /* Normally I would authorize the user, once authorized successfully
      then toggle but inputting pseudo functionality instead
      */
      this.authSuccess();
      this.navCtrl.setRoot(Dashboard)
    } else {
      this.authError();
    }
  }

  authSuccess() {
    setTimeout(() => {
      // this.navCtrl.setRoot()
      console.log("HERE in authsuccess")
    }, 500)
  }

  authError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'There was an error with your email or password',
      buttons: ['Continue']
    })
    alert.present();
  }
}
