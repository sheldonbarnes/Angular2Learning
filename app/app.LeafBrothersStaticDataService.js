System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/take', 'rxjs/Observable', 'rxjs'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, Rx;
    var LeafBrothersStaticDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            }],
        execute: function() {
            LeafBrothersStaticDataService = (function () {
                function LeafBrothersStaticDataService(http) {
                    //mydivisions: Rx.ReplaySubject<any[]> = new Rx.ReplaySubject(1);
                    this.customers = new Rx.Subject();
                    this.http = http;
                }
                LeafBrothersStaticDataService.prototype.addCustomer = function (customer) {
                    var newCustomer = customer;
                    this.customers.next(newCustomer);
                };
                LeafBrothersStaticDataService.prototype.GetSubdivisions = function () {
                    console.log('Utilizing my static dapi service');
                    return this.http.get("dapi/subdivisions.json");
                };
                LeafBrothersStaticDataService.prototype.GetCustomers = function () {
                    return this.http.get("dapi/customers.json");
                };
                LeafBrothersStaticDataService.prototype.GetCustomer = function (id) {
                    return null;
                };
                LeafBrothersStaticDataService.prototype.Get = function (route) {
                    var testData = new Observable_1.Observable();
                    return null;
                };
                LeafBrothersStaticDataService.prototype.UpdateCustomer = function (cstmr) {
                    return null;
                };
                LeafBrothersStaticDataService = __decorate([
                    core_1.Component({
                        bindings: [http_1.HTTP_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LeafBrothersStaticDataService);
                return LeafBrothersStaticDataService;
            }());
            exports_1("LeafBrothersStaticDataService", LeafBrothersStaticDataService);
        }
    }
});
//# sourceMappingURL=app.LeafBrothersStaticDataService.js.map