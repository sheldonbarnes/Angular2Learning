System.register(['angular2/core', 'angular2/router', './app.LeafBrothersDataService', './app.LeafBrothersStaticDataService', 'rxjs/operator/map'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, app_LeafBrothersDataService_1, app_LeafBrothersStaticDataService_1;
    var initState, CustomersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_LeafBrothersDataService_1_1) {
                app_LeafBrothersDataService_1 = app_LeafBrothersDataService_1_1;
            },
            function (app_LeafBrothersStaticDataService_1_1) {
                app_LeafBrothersStaticDataService_1 = app_LeafBrothersStaticDataService_1_1;
            },
            function (_1) {}],
        execute: function() {
            // This is
            initState = new core_1.OpaqueToken("Hellko");
            CustomersComponent = (function () {
                function CustomersComponent(ts) {
                    var _this = this;
                    console.log('I am in the constructor for the Hello world Customers Component');
                    ts.GetCustomers()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (customers) { return _this.customers = customers; });
                }
                CustomersComponent.prototype.onSelectCustomer = function (customer) {
                    console.log(JSON.stringify(customer));
                    console.log(customer.name);
                    console.log(customer.address.zipcode);
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers'
                    }),
                    core_1.View({
                        templateUrl: 'customers.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    __param(0, core_1.Inject(app_LeafBrothersStaticDataService_1.LeafBrothersStaticDataService)), 
                    __metadata('design:paramtypes', [app_LeafBrothersDataService_1.LeafBrothersDataService])
                ], CustomersComponent);
                return CustomersComponent;
            }());
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=app.customercomponent.js.map