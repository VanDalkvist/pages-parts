var assert = require('assert');
var pager = require('./core/page-parts.builder.js');

var neighborsCount = 2;

assert.equal(pager.calculateParts(neighborsCount, 2, 5).length, 1, "2, 5");
assert.equal(pager.calculateParts(neighborsCount, 4, 5).length, 1, "4, 5");
assert.equal(pager.calculateParts(neighborsCount, 3, 5).length, 1, "1, 5");

assert.equal(pager.calculateParts(neighborsCount, 4, 4).length, 1, "4, 4");
assert.equal(pager.calculateParts(neighborsCount, 3, 4).length, 1, "3, 4");
assert.equal(pager.calculateParts(neighborsCount, 2, 4).length, 1, "2, 4");
assert.equal(pager.calculateParts(neighborsCount, 1, 4).length, 1, "1, 4");

assert.equal(pager.calculateParts(neighborsCount, 3, 3).length, 1, "3, 3");
assert.equal(pager.calculateParts(neighborsCount, 2, 3).length, 1, "2, 3");

var oneTen = pager.calculateParts(neighborsCount, 1, 3);
assert.equal(oneTen.length, 1, "1, 3");
assert.equal(oneTen[0][0], 1, "1, 3: [0][0] === 1");

var failed = false;
try {
  pager.calculateParts(neighborsCount, 1, 0);
}
catch (err) {
  failed = true;
}

assert.equal(failed, true, "1, 0");

var oneFive = pager.calculateParts(neighborsCount, 1, 5);
assert.equal(oneFive.length, 2, "1, 5");
assert.equal(oneFive[0][0], 1, "1, 5: [0][0] === 1");
assert.equal(oneFive[0].length, 3, "1, 5: [0] - 3");
assert.equal(oneFive[0][2], 3, "1, 5: [0][2] - 3");
assert.equal(oneFive[1].length, 1, "1, 5: [1] - 1");
assert.equal(oneFive[1][0], 5, "1, 5: [1][0] === 5");

assert.equal(pager.calculateParts(neighborsCount, 5, 10).length, 3, "5, 10");
assert.equal(pager.calculateParts(neighborsCount, 6, 10).length, 3, "6, 10");

var sevenTen = pager.calculateParts(neighborsCount, 7, 10);
assert.equal(sevenTen.length, 2, "7, 10");
assert.equal(sevenTen[0].length, 1, "7, 10: [0] - 1");
assert.equal(sevenTen[0][0], 1, "7, 10: [0][0] === 1");
assert.equal(sevenTen[1][0], 5, "7, 10: [1][0] === 5");
assert.equal(sevenTen[1][1], 6, "7, 10: [1][1] === 6");
assert.equal(sevenTen[1][5], 10, "7, 10: [1][5] === 10");

assert.equal(pager.calculateParts(neighborsCount, 7, 11).length, 3, "7, 11");

var twoTen = pager.calculateParts(neighborsCount, 2, 10);
assert.equal(twoTen.length, 2, "2, 10");
assert.equal(twoTen[0].length, 4, "2, 10: [0] - 4");
assert.equal(twoTen[0][0], 1, "2, 10: [0][0] === 1");
assert.equal(twoTen[0][3], 4, "2, 10: [0][3] === 4");
assert.equal(twoTen[1][0], 10, "2, 10: [1][0] === 10");

var fourTen = pager.calculateParts(neighborsCount, 4, 10);
assert.equal(fourTen.length, 2, "4, 10");
assert.equal(fourTen[0].length, 6, "4, 10: [0] - 6");
assert.equal(fourTen[0][0], 1, "4, 10: [0][0] === 1");
assert.equal(fourTen[0][1], 2, "4, 10: [0][1] === 2");
assert.equal(fourTen[0][3], 4, "4, 10: [0][3] === 4");
assert.equal(fourTen[0][5], 6, "4, 10: [0][5] === 6");
assert.equal(fourTen[1][0], 10, "4, 10: [1][0] === 10");