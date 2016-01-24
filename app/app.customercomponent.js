System.register(['angular2/core', './app.testservice'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_testservice_1;
    var CustomersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_testservice_1_1) {
                app_testservice_1 = app_testservice_1_1;
            }],
        execute: function() {
            // This is
            CustomersComponent = (function () {
                function CustomersComponent(ts) {
                    var _this = this;
                    console.log('I am in the constructor for the Hello world Customers Component');
                    ts.GetCustomers()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (customers) { return _this.customers = customers; });
                }
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers',
                    }),
                    core_1.View({
                        templateUrl: 'customers.html'
                    }), 
                    __metadata('design:paramtypes', [app_testservice_1.TestService])
                ], CustomersComponent);
                return CustomersComponent;
            })();
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=app.customercomponent.js.map