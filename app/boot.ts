import {bootstrap}    from 'angular2/platform/browser';
import {TestService} from './app.testservice';
import {AppComponent} from './app.component';
import {enableProdMode} from 'angular2/core';

//import {Http, HTTP_BINDINGS} from 'angular2/http';


//bootstrap(AppComponent, [HTTP_BINDINGS]);
enableProdMode();
bootstrap(AppComponent);
