import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/src/http/static_response';

export interface ILeafBrothersDataService {

    GetCustomers() : Observable<Response>;
    GetCustomer(id: String) : Observable<Response>;
    GetSubdivisions() : Observable<Response>;

}
