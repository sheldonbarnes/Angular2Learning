System.register(['angular2/platform/browser', './app.component'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            //import {Http, HTTP_BINDINGS} from 'angular2/http';
            //bootstrap(AppComponent, [HTTP_BINDINGS]);
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map