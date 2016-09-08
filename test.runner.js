// dependencies

var Test = require('./core/test');

// initialization

var instance = new Test();

instance.start(function () {
  require('./cases');
});

// private methods