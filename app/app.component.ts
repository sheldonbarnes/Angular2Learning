import {Component,enableProdMode} from 'angular2/core';
import {View} from 'angular2/core';
//import {RouteConfig} from 'angular2/router';
import {TestService} from './app.testservice';
import {Customer} from './models/Customer';
import {CustomersComponent} from './app.customercomponent';
import {take} from 'rxjs/operator/take';
import {map} from 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';
// This is

@Component({
    selector: 'my-app',
})
@View({
	directives: [RouterLink, ROUTER_DIRECTIVES],
    templateUrl: 'template1.html'
})

@RouteConfig([
  {path: '/Customers',
    as: 'Customers',
    component: CustomersComponent }
])


export class AppComponent {

  public subdivisions: any[];
  public customers: Customer[];

  constructor(ts: TestService)
  {

    //ts.getSomething1();

    ts.GetSubdivisions()
    .map (res => res.json())
    .subscribe (subdivisions => this.subdivisions = subdivisions);

    /*
    ts.GetCustomers()
    .map (res => res.json())
    .subscribe (customers => this.customers = customers);*/

  }


  public title = 'Tour of Heroes';



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
