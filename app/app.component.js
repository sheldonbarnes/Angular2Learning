System.register(['angular2/core', './app.testservice', './app.customercomponent', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, app_testservice_1, app_customercomponent_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (app_testservice_1_1) {
                app_testservice_1 = app_testservice_1_1;
            },
            function (app_customercomponent_1_1) {
                app_customercomponent_1 = app_customercomponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // This is
            AppComponent = (function () {
                function AppComponent(ts) {
                    //ts.getSomething1();
                    var _this = this;
                    this.title = 'Tour of Heroes';
                    ts.GetSubdivisions()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (subdivisions) { return _this.subdivisions = subdivisions; });
                    /*
                    ts.GetCustomers()
                    .map (res => res.json())
                    .subscribe (customers => this.customers = customers);*/
                }
                AppComponent.prototype.onSelectCustomer = function (customer) {
                    if (customer.name == "DaShaun Gay Barnes") {
                        console.log('This is the gayest customer on the planet');
                    }
                    if (customer.name == "Leaf Brothers") {
                        console.log("The best leaf removal company in Hamilton County");
                    }
                    console.log(JSON.stringify(customer));
                    console.log(customer.name);
                    console.log(customer.address.zipcode);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                    }),
                    core_2.View({
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'template1.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/Customers',
                            as: 'Customers',
                            component: app_customercomponent_1.CustomersComponent }
                    ]), 
                    __metadata('design:paramtypes', [app_testservice_1.TestService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map