
// ===========================================
// Puzzle - Grid
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    puzzle.grid = {
      0: {top: 0,   left: 0},
      1: {top: 0,   left: 100},
      2: {top: 0,   left: 200},
      3: {top: 100, left: 0},
      4: {top: 100, left: 100},
      5: {top: 100, left: 200},
      6: {top: 200, left: 0},
      7: {top: 200, left: 100},
      8: {top: 200, left: 200}
    };


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
    

    return puzzle;
  })(puzzle || {});

