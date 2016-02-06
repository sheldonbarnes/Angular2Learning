import {Component} from 'angular2/core';
//import {Injectable} from 'angular2/core';
import {Http, HTTP_BINDINGS, Headers} from 'angular2/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';
import {ILeafBrothersDataService} from './models/ILeafBrothersDataService';
import {Response} from 'angular2/src/http/static_response';
import {Customer} from './models/Customer';
import * as Rx from 'rxjs';

@Component({
    bindings: [HTTP_BINDINGS]
})

export class LeafBrothersStaticDataService implements ILeafBrothersDataService{

  public people: String;

  //mydivisions: Rx.ReplaySubject<any[]> = new Rx.ReplaySubject(1);
  customers: Rx.Subject<Customer> = new Rx.Subject<any>();


  addCustomer (customer: Customer) {
  	let newCustomer = customer;
  	this.customers.next(newCustomer);
  }

  public http: Http;
  constructor (http: Http) {
    this.http = http;
  }



  public GetSubdivisions () : Observable<Response> {
    console.log('Utilizing my static dapi service');
    return this.http.get("dapi/subdivisions.json");
  }

  public GetCustomers () : Observable<Response> {
        return this.http.get("dapi/customers.json");
  }
  public GetCustomer (id: String) : Observable<Response> {
    return null;
  }

  public Get (route:String) : Observable<Response> {
    var testData = new Observable<Response>();

    return null;
  }



  public UpdateCustomer(cstmr: Customer): Observable<Response> {
    return null;
  }

}
