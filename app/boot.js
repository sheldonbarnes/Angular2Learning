System.register(['angular2/platform/browser', './app.LeafBrothersDataService', './app.LeafBrothersStaticDataService', './app.component', 'angular2/router', 'angular2/core', 'angular2/http'], function(exports_1) {
    var browser_1, app_LeafBrothersDataService_1, app_LeafBrothersStaticDataService_1, app_component_1, router_1, core_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_LeafBrothersDataService_1_1) {
                app_LeafBrothersDataService_1 = app_LeafBrothersDataService_1_1;
            },
            function (app_LeafBrothersStaticDataService_1_1) {
                app_LeafBrothersStaticDataService_1 = app_LeafBrothersStaticDataService_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent, [HTTP_BINDINGS]);
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [app_LeafBrothersDataService_1.LeafBrothersDataService, app_LeafBrothersStaticDataService_1.LeafBrothersStaticDataService, http_1.HTTP_BINDINGS, router_1.ROUTER_BINDINGS]);
        }
    }
});
//# sourceMappingURL=boot.js.map