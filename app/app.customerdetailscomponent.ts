import {Component,View, enableProdMode} from 'angular2/core';
import {Router,RouteParams, RouteConfig} from 'angular2/router';
import {LeafBrothersDataService} from './app.LeafBrothersDataService';
import {Customer} from './models/Customer';
import  'rxjs/operator/map';

import {Observable} from 'rxjs/Observable';

// This is

@Component({
    selector: 'customers'
    //directives: [ROUTER_DIRECTIVES, ROUTER_BINDINGS]
})


@View({
	templateUrl: 'customerdetails.html'})


export class CustomerDetailsComponent {

    customers: Customer[];

    constructor(inputParameters: RouteParams,ts: LeafBrothersDataService) {
      console.log('I am in the constructor for the CustomerDetailsComponent');
      console.log(inputParameters.params["id"]);
      ts.GetCustomers()
      .map (res => res.json())
      .subscribe (customers => this.customers = customers);

    }

    public onSelectCustomer (customer: Customer) {

      if (customer.name == "DaShaun Gay Barnes") {
        console.log('This is the gayest customer on the planet');
      }

      if (customer.name == "Leaf Brothers") {
        console.log("The best leaf removal company in Hamilton County");
      }
      console.log(JSON.stringify(customer));
      console.log(customer.name);
      console.log(customer.address.zipcode);

    }
}
