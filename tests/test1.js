var assert = require('assert');
var Test = (function () {
    function Test() {
    }
    Test.prototype.RunTests = function () {
        describe('Array', function () {
            describe('#indexOf()', function () {
                it('should return -1 when the value is not present', function () {
                    assert.equal(-1, [1, 2, 3].indexOf(5));
                    assert.equal(-1, [1, 2, 3].indexOf(0));
                });
            });
        });
    };
    Test.prototype.RunTest1 = function () {
        describe('My Service', function () {
            it('should return some customers', function () {
                assert.equal(1, 1);
                //assert.equal(-1, [1,2,3].indexOf(0));
            });
        });
    };
    return Test;
}());
var t = new Test();
t.RunTest1();
//# sourceMappingURL=test1.js.map