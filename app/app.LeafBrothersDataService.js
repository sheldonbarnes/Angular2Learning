System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/take'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var LeafBrothersDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            LeafBrothersDataService = (function () {
                function LeafBrothersDataService(http) {
                    this.http = http;
                    console.log('I am in the constructor for the service');
                }
                LeafBrothersDataService.prototype.getSomething = function () {
                    console.log('I am about to pull the data');
                    return this.http.get('heroes.json');
                    //console.log('Sheldon is good');
                };
                LeafBrothersDataService.prototype.GetSubdivisions = function () {
                    console.log('Getting /api/Subdivisions');
                    return this.http.get('http://127.0.0.1:3000/api/Subdivisions');
                };
                LeafBrothersDataService.prototype.GetCustomers = function () {
                    console.log('Getting /api/Customers');
                    return this.http.get('http://127.0.0.1:3000/api/Customers');
                };
                LeafBrothersDataService.prototype.GetCustomer = function (id) {
                    console.log('Getting /api/Customer/' + id);
                    return this.http.get('http://127.0.0.1:3000/api/Customer/' + id + "/");
                };
                LeafBrothersDataService.prototype.Get = function (route) {
                    return this.http.get('http://127.0.0.1:3000/api/' + route);
                };
                LeafBrothersDataService.prototype.Update = function (arg, route) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put('http://127.0.0.1:3000/api/' + route, JSON.stringify(arg), {
                        headers: headers
                    });
                };
                LeafBrothersDataService.prototype.UpdateCustomer = function (cstmr) {
                    console.log('I am making the put call' + JSON.stringify(cstmr));
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.put('http://127.0.0.1:3000/api/Customer', JSON.stringify(cstmr), {
                        headers: headers
                    });
                };
                LeafBrothersDataService = __decorate([
                    core_1.Component({
                        bindings: [http_1.HTTP_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LeafBrothersDataService);
                return LeafBrothersDataService;
            })();
            exports_1("LeafBrothersDataService", LeafBrothersDataService);
        }
    }
});
//# sourceMappingURL=app.LeafBrothersDataService.js.map