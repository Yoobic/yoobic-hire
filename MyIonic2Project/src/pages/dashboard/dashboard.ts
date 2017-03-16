import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HeroListComponent } from '../list/list-hero.component';

@Component({
  // 'selector' here is for the CSS selector to locate the signin.scss file
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  marvelize() {
    this.navCtrl.setRoot(HeroListComponent);
  }
}
