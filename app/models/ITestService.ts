import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/src/http/static_response';

export interface ITestService {
    getSomething (): Observable<Response>;
    getHeroes(): Observable<Response>;
}
