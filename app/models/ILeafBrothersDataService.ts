import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/src/http/static_response';
import {Customer} from './Customer';


export interface ILeafBrothersDataService {

    GetCustomers() : Observable<Response>;
    GetCustomer(id: String) : Observable<Response>;
    UpdateCustomer(cstmr: Customer): Observable<Response>
    GetSubdivisions() : Observable<Response>;

}
