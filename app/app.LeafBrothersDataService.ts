import {Component} from 'angular2/core';
//import {Injectable} from 'angular2/core';
import {Http, HTTP_BINDINGS, Headers} from 'angular2/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';
import {ILeafBrothersDataService} from './models/ILeafBrothersDataService';
import {Response} from 'angular2/src/http/static_response';
import {Customer} from './models/Customer';

interface RouteProvided {
  route: String;
}

@Component({
    bindings: [HTTP_BINDINGS]
})



export class LeafBrothersDataService implements ILeafBrothersDataService{

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

  public GetSubdivisions () : Observable<Response> {
    console.log('Getting /api/Subdivisions');
    return this.http.get('http://127.0.0.1:3000/api/Subdivisions');
  }

  public GetCustomers () : Observable<Response> {
    console.log('Getting /api/Customers');
    return this.http.get('http://127.0.0.1:3000/api/Customers');
  }
  public GetCustomer (id: String) : Observable<Response> {
    console.log('Getting /api/Customer/' + id);
    return this.http.get('http://127.0.0.1:3000/api/Customer/' + id + "/");
  }

  public Get (route:String) : Observable<Response> {
    return this.http.get('http://127.0.0.1:3000/api/' + route);
  }

  public Update<T extends RouteProvided>(arg:T, route:String) : Observable<Response> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log('The type is ' + typeof arg);

    return this.http.put('http://127.0.0.1:3000/api/' + route, JSON.stringify(arg), {
    headers: headers
    });
  }

  public Create<T>(arg:T, route:String) : Observable<Response> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.http.post('http://127.0.0.1:3000/api/' + route, JSON.stringify(arg), {
    headers: headers
    });
  }

  public UpdateCustomer(cstmr: Customer): Observable<Response> {
    console.log('I am making the put call' + JSON.stringify(cstmr));

    var headers = new Headers();
 headers.append('Content-Type', 'application/json');


    return this.http.put('http://127.0.0.1:3000/api/Customer', JSON.stringify(cstmr), {
    headers: headers
    });
  }

}
