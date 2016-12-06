describe("flatten", function() {
  require('../../lib/flatten/main.jsx');

  beforeEach(function() {
    //
  });

  var tests = {
      depth1: {
        arr: [1,2,3,4],
        finalLength: 4
      }
  };

  var test = function(conf) {
    var result = conf.arr.flatten();
    expect(result.length).toBe(conf.finalLength);
  }

  it("should flatten array with depth = 1", function() {
    test(tests.depth1);
  });

});
