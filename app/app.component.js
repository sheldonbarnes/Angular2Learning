System.register(['angular2/core', './app.testservice', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, app_testservice_1, http_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_testservice_1_1) {
                app_testservice_1 = app_testservice_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // This is
            AppComponent = (function () {
                function AppComponent(http, ts) {
                    var _this = this;
                    this.title = 'Tour of Heroes';
                    ts.getSomething()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (heroes) { return _this.onGetHeroesComplete(heroes); });
                }
                AppComponent.prototype.onGetHeroesComplete = function (heroes) {
                    this.heroes = heroes;
                    console.log(JSON.stringify(heroes));
                };
                AppComponent.prototype.onSelect = function (thisHero) {
                    console.log('Selected hero' + thisHero.name);
                    this.selectedHero = thisHero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'template1.html',
                        viewProviders: [],
                        bindings: [app_testservice_1.TestService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, app_testservice_1.TestService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map