import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { secret } from '../../../secrets.js';

import crypto from 'crypto';

import { Hero } from './list';

@Injectable()
export class HeroService {
  // let endUrl = "&ts=" + ts + "&hash=" + hash;
  // private heroesUrl = 'http://gateway.marvel.com:80/v1/public/characters?apikey=216f5b23efe228e0eb005c1d68bc0ad7'
  private heroesUrl = 'http://gateway.marvel.com/v1/public/characters'; // URL to web API
  // $http.defaults.headers.common['216f5b23efe228e0eb005c1d68bc0ad7'] = key;

  constructor (private http: Http) {}

  getHeroes (): Observable<Hero[]> {
    let publicKey = '216f5b23efe228e0eb005c1d68bc0ad7',
        privateKey = secret,
        ts = new Date().getTime();
    let hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');
        // url += "&ts="+ts+"&hash="+hash;
        // console.log('LE HASH', hash)
    let endUrl = "?apikey=" + publicKey + "&ts=" + ts + "&hash=" + hash;
    let finalUrl = this.heroesUrl + endUrl;

    // let headers = new Headers({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //   'apikey': publicKey,
    //   'ts': ts,
    //   'hash': hash
    // })
    // let options = new RequestOptions({ headers: headers });

    return this.http
      .get(finalUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // addHero () {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
