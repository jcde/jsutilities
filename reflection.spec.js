describe("reflection", function () {
  var reflection = require('./reflection.js');

  var ob = (function () {
      return function object() { }
  });

  it("type", function() {
      expect(reflection.type(new ob())).toEqual('object');
  });
});
