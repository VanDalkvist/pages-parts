// dependencies

var _ = require('lodash');

// exports

module.exports = {
    calculateParts: function _calculateParts(neighborsCount, currentPage, pagesCount) {
        if (pagesCount <= 0) throw new Error("Count of pages less or equals to zero. PagesCount = " + pagesCount);

        if (pagesCount - (neighborsCount + 1) <= 1) {
            return [_.range(1, pagesCount + 1)];
        }

        var currentPageNumber = parseInt(currentPage);
        var topBound = currentPageNumber + neighborsCount;
        var bottomBound = currentPageNumber - neighborsCount;
        var leftFromStartToBound = bottomBound - 1;
        var leftFromBoundToEnd = pagesCount - topBound;

        if (leftFromBoundToEnd <= 1 && leftFromStartToBound <= 1) {
            return [_.range(1, pagesCount + 1)];
        }

        if (leftFromStartToBound > 1 && leftFromBoundToEnd > 1) {
            return [[1], _.range(bottomBound, (topBound + 1)), [pagesCount]];
        }

        var range = _.range(
          leftFromStartToBound <= 1 ? 1 : bottomBound,
          leftFromBoundToEnd <= 1 ? pagesCount + 1 : topBound + 1
        );

        return leftFromBoundToEnd > 1 ? [range, [pagesCount]] : [[1], range];
    }
};

// initialization

// private methods
