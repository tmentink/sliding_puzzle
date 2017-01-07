
// ===========================================
// Puzzle - Grid
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";


    // Setup
    // =======================================
    var setGrid = function() {
      var grid = {};
      var tileCount = getTileCount();

      for (var i = 0, i_end = tileCount; i < i_end; i++) {
        var position = getGridPosition(i);
        grid[i] = position;
      }

      puzzle.grid = grid;
    };

    var getGridPosition = function(i) {
      return {
        top: getTopPosition(i),
        left: getLeftPosition(i)
      };
    };

    var getTopPosition = function(i) {
      switch(i) {
        case 0:
        case 1:
        case 2:
          return 0;

        case 3:
        case 4:
        case 5:
          return 1 * getTileSize();

        case 6:
        case 7:
        case 8:
          return 2 * getTileSize();
      }
    };

    var getLeftPosition = function(i) {
      switch(i) {
        case 0:
        case 3:
        case 6:
          return 0;

        case 1:
        case 4:
        case 7:
          return 1 * getTileSize();

        case 2:
        case 5:
        case 8: 
          return 2 * getTileSize();
      }
    };

    var getTileSize = function() {
      return (puzzle.config.puzzleSize / puzzle.config.rowSize);
    };

    var getTileCount = function() {
      return puzzle.config.rowSize * puzzle.config.rowSize;
    };


    // Adjacent
    // =======================================
    var getIDByPosition = function(position) {
      for (var prop in puzzle.grid) {
        
        if (utility.compareObjects(puzzle.grid[prop], position)) {
          return parseInt(prop);
        }
      }
    };

    var isAdjacent = function(id) {
      var tilePosition = puzzle.getTilePosition(id);
      var gridID = getIDByPosition(tilePosition);
      var adjacentIDs = getAdjacentIDs(gridID);
      var openID = getIDByPosition(puzzle.openPosition);

      return adjacentIDs.indexOf(openID) > -1;
    };

    var getAdjacentIDs = function(id) {
      switch(id) {
        case 0:
          return [1,3];

        case 1:
          return [0,2,4];

        case 2:
          return [1,5];

        case 3:
          return [0,4,6];

        case 4:
          return [1,3,5,7];

        case 5:
          return [2,4,8];

        case 6:
          return [3,7];

        case 7:
          return [4,6,8];

        case 8:
          return [5,7];
      }
    };


    // Public Methods
    // =======================================
    puzzle.isAdjacent = isAdjacent;
    puzzle.setGrid = setGrid;


    return puzzle;
  })(puzzle || {});

