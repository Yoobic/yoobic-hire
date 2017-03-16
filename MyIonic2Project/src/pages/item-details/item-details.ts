import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  itemSeries: any;
  itemStories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.itemSeries = this.selectedItem.series.items
    this.itemStories = this.selectedItem.stories.items

    console.log('SELECTED?', this.selectedItem)
    console.log('stories?', this.itemStories)
    console.log('sERIES?', this.itemSeries)
  }
}
