
// ===========================================
// Puzzle - Adjacent
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // References
    // =======================================
    var getTilePosition = puzzle.utility.getTilePosition;
    var getIDByPosition = puzzle.utility.getIDByPosition;
    var getIDByCoordinates = puzzle.utility.getIDByCoordinates;


    // Adjacent
    // =======================================
    var isAdjacent = function(id) {
      var tilePosition = getTilePosition(id);
      var gridID = getIDByPosition(tilePosition);
      var adjacentIDs = getAdjacentIDs(gridID);
      var openID = getIDByPosition(puzzle.openPosition);

      return adjacentIDs.includes(openID);
    };

    var getAdjacentIDs = function(id) {
      var x = puzzle.grid[id].coordinates[1];
      var y = puzzle.grid[id].coordinates[0];
      var ids = [];

      if (canMoveLeft(x)) {
        ids.push(getIDByCoordinates([y, x-1]));
      }

      if (canMoveRight(x)) {
        ids.push(getIDByCoordinates([y, x+1]));
      }

      if (canMoveUp(y)) {
        ids.push(getIDByCoordinates([y-1, x]));
      }

      if (canMoveDown(y)) {
        ids.push(getIDByCoordinates([y+1, x]));
      }

      return ids;
    };

    var canMoveLeft = function(x) {
      return x > 0;
    };

    var canMoveRight = function(x) {
      return x < (puzzle.gridSize - 1);
    };

    var canMoveUp = function(y) {
      return y > 0;
    };

    var canMoveDown = function(y) {
      return y < (puzzle.gridSize - 1);
    };


    // Public Methods
    // =======================================
    puzzle.isAdjacent = isAdjacent;

    return puzzle;
  })(puzzle || {});

