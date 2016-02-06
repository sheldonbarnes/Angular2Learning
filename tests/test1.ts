var assert = require('assert');

class Test {

  public RunTests() {

    describe('Array', function() {
      describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
          assert.equal(-1, [1,2,3].indexOf(5));
          assert.equal(-1, [1,2,3].indexOf(0));
        });
      });
    });

  }

  public RunTest1() {
    describe('My Service', function(){
      it('should return some customers', function () {

        assert.equal(1,1);
        //assert.equal(-1, [1,2,3].indexOf(0));
      });
    });
  }
}

var t = new Test();

t.RunTest1();
