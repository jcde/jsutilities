describe("reflection", function () {
  var index = require('../reflection.js');

  var ob = (function () {
      return function object() { }
  });

  it("type", function() {
      expect(index.type(new ob())).toEqual('object');
  });
});
