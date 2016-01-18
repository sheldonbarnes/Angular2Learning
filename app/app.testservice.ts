import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import  'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ITestService} from './models/ITestService';
import {Response} from 'angular2/src/http/static_response';

@Component({
    //bindings: [HTTP_PROVIDERS]
})

export class TestService implements ITestService{

  public people: String;
  public http: Http;

  constructor (http: Http) {
    this.http = http;
    console.log('I am in the constructor for the service');
  }

  public getSomething (): Observable<Response> {
      console.log('I am about to pull the data');
        return this.http.get('heroes.json');
    //console.log('Sheldon is good');
  }
}
