// dependencies

var assert = require('assert');

// exports

module.exports = Test;

// initialization

function Test() {

}

/*
Execute tests synchronously.
 */
Test.prototype.start = function _start(executor) {
  try {
    executor();
  }
  catch (err) {
    if (err instanceof assert.AssertionError) {
      console.error("Failed test: \n" + err.message + ": actual - " + err.actual + ", expected - " + err.expected);
      throw new Error("Tests Failed!");
    }
    throw err;
  }
  console.log('Passed!');
};

// private methods
