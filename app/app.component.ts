import {Component,enableProdMode} from 'angular2/core';
import {View, Inject} from 'angular2/core';
//import {RouteConfig} from 'angular2/router';
import {LeafBrothersDataService} from './app.LeafBrothersDataService';
import {ILeafBrothersDataService} from './models/ILeafBrothersDataService';
import {LeafBrothersStaticDataService} from './app.LeafBrothersStaticDataService';

import 'rxjs/operator/take';
import  'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';
// This is

//Import my Models and Components
import {Customer} from './models/Customer';
import {CustomersComponent} from './app.customercomponent';
import {CustomerDetailsComponent} from './app.customerdetailscomponent';


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
    component: CustomersComponent },
    {path: '/CustomerDetails/:id',
      as: 'CustomerDetails',
      component: CustomerDetailsComponent }
])


export class AppComponent {

  public subdivisions: any[];
  public customers: Customer[];

  constructor(@Inject(LeafBrothersStaticDataService) ds: ILeafBrothersDataService)
  {
    ds.GetSubdivisions()
    .map (res => res.json())
    .subscribe (subdivisions => this.subdivisions = subdivisions);
  }
}
