// our own custom matchers
var matchers = {
  toHaveLength: function () {
    return {
      compare: function (actual, expected) {
        return {
          pass: actual.length === expected
        };
      }
    };
  },
  toMatchArray: function() {
      return {
          compare: function(actual, expected) {
              return {
                  pass: false
              }
          }
      }
  }
};

jasmine.getEnv().beforeEach(function () {
  this.addMatchers(matchers);
});