System.register(['./Address'], function(exports_1) {
    var Address_1;
    var Customer;
    return {
        setters:[
            function (Address_1_1) {
                Address_1 = Address_1_1;
            }],
        execute: function() {
            Customer = (function () {
                function Customer() {
                    this.address = new Address_1.Address();
                }
                Customer.prototype.toString = function () {
                    return this.toString();
                };
                return Customer;
            })();
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=Customer.js.map