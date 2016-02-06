import {Component,View, Inject, enableProdMode, OpaqueToken} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {LeafBrothersDataService} from './app.LeafBrothersDataService';
import {LeafBrothersStaticDataService} from './app.LeafBrothersStaticDataService';

import {Customer} from './models/Customer';
import  'rxjs/operator/map';

import {Observable} from 'rxjs/Observable';

// This is
const initState = new OpaqueToken("Hellko");

@Component({
    selector: 'customers'
})


@View({
	templateUrl: 'customers.html',
      directives: [ROUTER_DIRECTIVES]
})



export class CustomersComponent {

    customers: Customer[];

    constructor(@Inject(LeafBrothersStaticDataService)ts: LeafBrothersDataService) {
      console.log('I am in the constructor for the Hello world Customers Component');

      ts.GetCustomers()
      .map (res => res.json())
      .subscribe (customers => this.customers = customers);

    }


    public onSelectCustomer (customer: Customer) {

      console.log(JSON.stringify(customer));
      console.log(customer.name);
      console.log(customer.address.zipcode);

    }
}
