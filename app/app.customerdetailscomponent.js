System.register(['angular2/core', 'angular2/router', './app.LeafBrothersDataService', './models/Customer', 'rxjs/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_LeafBrothersDataService_1, Customer_1;
    var CustomerDetailsComponent;
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
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (_1) {}],
        execute: function() {
            // This is
            CustomerDetailsComponent = (function () {
                function CustomerDetailsComponent(inputParameters, ts) {
                    var _this = this;
                    this.lbds = ts;
                    console.log('I am in the constructor for the CustomerDetailsComponent');
                    console.log(inputParameters.params["id"]);
                    this.customer1 = new Customer_1.Customer();
                    ts.GetCustomer(inputParameters.params["id"])
                        .map(function (res) { return res.json(); })
                        .subscribe(function (customer) { return _this.customer1 = customer; });
                    //this.customer1.name = "Sheldon Barnes";
                    //.subscribe (customer => console.log(JSON.stringify(customer)));
                }
                CustomerDetailsComponent.prototype.updateCustomer = function (updatedCustomer) {
                    var me = new Customer_1.Customer();
                    //me = updatedCustomer;
                    if (typeof updatedCustomer === 'Customer') {
                        console.log('We have a customer');
                    }
                    console.log('The type is ' + typeof updatedCustomer);
                    console.log('The name is ' + updatedCustomer.constructor);
                    this.lbds.Update(updatedCustomer, "Customer")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (result) { return console.log(result); });
                    console.log('updateCustomer: ' + updatedCustomer.name);
                };
                CustomerDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet'
                    }),
                    core_1.View({
                        templateUrl: 'customerdetails.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, app_LeafBrothersDataService_1.LeafBrothersDataService])
                ], CustomerDetailsComponent);
                return CustomerDetailsComponent;
            })();
            exports_1("CustomerDetailsComponent", CustomerDetailsComponent);
        }
    }
});
//# sourceMappingURL=app.customerdetailscomponent.js.map