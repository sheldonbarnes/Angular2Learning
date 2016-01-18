import {Component} from 'angular2/core';
import {TestService} from './app.testservice';
import {HTTP_BINDINGS,Http} from 'angular2/http';
import  'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

// This is

@Component({
    selector: 'my-app',
    templateUrl: 'template1.html',
      viewProviders: [],
    bindings: [TestService]
})

export class AppComponent {

  public heroes: Hero[];

  constructor(http: Http, ts: TestService)
  {

    ts.getSomething()
    .map(res => res.json())
    .subscribe(heroes => this.onGetHeroesComplete(heroes) );
  }

  public onGetHeroesComplete (heroes: Hero[]) {
    this.heroes = heroes;
    console.log(JSON.stringify(heroes));
  }

  public title = 'Tour of Heroes';

  public hero: Hero;

  //public heroes = HEROES;
  public selectedHero: Hero;

  onSelect (thisHero: Hero) {
    console.log('Selected hero' + thisHero.name);
    this.selectedHero = thisHero;
  }

}

interface Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
