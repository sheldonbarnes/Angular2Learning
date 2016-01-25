import {Component,View, enableProdMode} from 'angular2/core';
import {Router,RouteParams, RouteConfig} from 'angular2/router';
import {LeafBrothersDataService} from './app.LeafBrothersDataService';
import {ILeafBrothersDataService} from './models/ILeafBrothersDataService';
import {Customer} from './models/Customer';
import  'rxjs/operator/map';

import {Observable} from 'rxjs/Observable';

// This is

@Component({
    selector: 'router-outlet'
    //directives: [ROUTER_DIRECTIVES, ROUTER_BINDINGS]
})


@View({
	templateUrl: 'customerdetails.html'
})


export class CustomerDetailsComponent {

    public customer1: Customer;
    public name1: String;
    public lbds: LeafBrothersDataService;

    constructor(inputParameters: RouteParams, ts: LeafBrothersDataService) {

      this.lbds = ts;


      console.log('I am in the constructor for the CustomerDetailsComponent');
      console.log(inputParameters.params["id"]);

      this.customer1 = new Customer();

      ts.GetCustomer(inputParameters.params["id"])
      .map (res => res.json())
      .subscribe (customer => this.customer1 = customer);

      //this.customer1.name = "Sheldon Barnes";


      //.subscribe (customer => console.log(JSON.stringify(customer)));

    }

    public updateCustomer(updatedCustomer: Customer) {

      var me = new Customer();

      //me = updatedCustomer;

      if (me instanceof Customer) {
        console.log('We have a customer');
      }
        console.log('The name is ' + updatedCustomer.constructor);
      this.lbds.Update(updatedCustomer, "Customer")
      .map(res => res.json())
      .subscribe (result => console.log(result));

      console.log('updateCustomer: ' + updatedCustomer.name);
    }
}
