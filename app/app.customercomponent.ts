import {Component,View, enableProdMode} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {TestService} from './app.testservice';
import {Customer} from './models/Customer';

import {take} from 'rxjs/operator/take';
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';

// This is

@Component({
    selector: 'customers',
})


@View({
	templateUrl: 'customers.html'
})


export class CustomersComponent {

    customers: Customer[];
    
    constructor(ts: TestService) {
      console.log('I am in the constructor for the Hello world Customers Component');

      ts.GetCustomers()
      .map (res => res.json())
      .subscribe (customers => this.customers = customers);

    }
}
