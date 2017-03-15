// Observable Version
import { Component, OnInit } from '@angular/core';
import { Hero }              from './list';
import { HeroService }       from './list.service';

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

  constructor (private heroService: HeroService) {}

  // Created a promise to ensure page loads only when call to API server completes and returns info
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

  // Unnecessary older code
  // getHeroes() {
  //   this.heroService
  //     .getHeroes()
  //     .subscribe(
  //       heroes => {
  //         this.heroes = heroes
  //         this.isDataAvailable = true
  //       },
  //       error => {
  //         this.errorMessage = <any>error
  //       }
  //     )
  // }

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
}
