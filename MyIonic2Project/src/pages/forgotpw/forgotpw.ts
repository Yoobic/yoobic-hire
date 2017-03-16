import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-forgotPW',
  templateUrl: 'forgotPW.html'
})
export class ForgotPW {
  constructor(private app: App) {

    app._setDisableScroll(true)
  }
}
