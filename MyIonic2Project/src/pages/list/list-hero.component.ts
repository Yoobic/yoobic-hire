// Observable Version
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Hero }              from './list';
import { HeroService }       from './list.service';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [ HeroService ],
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';
  isDataAvailable: boolean = false;
  selectedItem: any;

  constructor (
    private heroService: HeroService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.selectedItem = navParams.get('item');
  }

  // set isDataAvailable to true only when promise resolves to true
  ngOnInit() {
    this.fetchEvent()
      .then((res) => {
        this.isDataAvailable = true
        console.log("Heroes loaded", this.heroes, this.isDataAvailable)
      })
      .catch(() => {
        console.log("No heroes", this.heroes);
      })
  }

  // Wrap call to API within a promise to ensure html page only loads when call is complete
  fetchEvent(): Promise<boolean> {
    var promise = new Promise<boolean>((resolve, reject) => {
      this.heroService
        .getHeroes()
        .subscribe(
          (heroes) => {
            if (heroes.length > 0) {
              this.heroes = heroes
              resolve(true);
            } else {
              reject(false);
            }
          },
          (error) => {
            this.errorMessage = <any>error
          }
        );
      });
    return promise;
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}


/*
OLD CODE

// Unnecessary older code
  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => {
          this.heroes = heroes
          this.isDataAvailable = true
        },
        error => {
          this.errorMessage = <any>error
        }
      )
  }
*/
