describe("flatten", function() {
  require('../../lib/flatten/main.jsx');

  var compareArrays = a => b => a.map((x, y) => x == b[y]);
  var isTrue = x => x == true;

  var tests = {
      depth1: {
        arr: [1,2,3,4],
        expected: [1,2,3,4]
      },
      depth2: {
        arr: [1,2,3,4,[5,6]],
        expected: [1,2,3,4,5,6]
      },
      depth3: {
        arr: [1,2,3,4,[5,[6,7,8]]],
        expected: [1,2,3,4,5,6,7,8]
      }
  };

  var test = function(conf) {
    var arr = conf.arr;
    var result = arr.flatten();
    var matches = compareArrays(result)(conf.expected)
      .filter(isTrue);
    expect(matches.length).toBe(conf.expected.length);
  }

  it("should flatten array with depth = 1", () => {
    test(tests.depth1);
  });

  it("should flatten array with depth = 2", () => {
    test(tests.depth2);
  });

  it("should flatten array with depth = 3", () => {
    test(tests.depth3);
  });

});
