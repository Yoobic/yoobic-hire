import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  // heros: Hero[];
  // mode: 'Observable';
  errorMessage: string;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  titles: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.titles = [
      'William Hartnell',
      'Patrick Troughton',
      'Jon Pertwee',
      'Tom Baker',
      'Peter Davison',
      'Colin Baker',
      'Sylvester McCoy',
      'Paul McGann',
      'Christopher Eccleston',
      'David Tennant',
      'Matt Smith',
      'Peter Capaldi'
    ]

    this.items = [];
    for(let i = 1; i < 13; i++) {
      this.items.push({
        title: this.titles[i - 1],
        note: '#' + i + ' Doctor',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
