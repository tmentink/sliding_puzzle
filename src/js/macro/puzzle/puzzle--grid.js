
// ===========================================
// Puzzle - Grid
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Setup
    // =======================================
    var rowIndex;
    var colIndex;

    var setGrid = function() {
      puzzle.grid = {};
      rowIndex = -1;
      var tileCount = puzzle.utility.getTileCount();
      
      for (var i = 0, i_end = tileCount; i < i_end; i++) {
        setGridIndexes(i);

        puzzle.grid[i] = {
          coordinates: [rowIndex, colIndex],
          position: getGridPosition(i)
        };
      }
    };

    var setGridIndexes = function(i) {
      colIndex = i % puzzle.config.gridSize;

      if (i % puzzle.config.gridSize == 0) {
        rowIndex += 1;
      }
    };

    var getGridPosition = function(i) {
      return {
        top: rowIndex * puzzle.utility.getTileSize(),
        left: colIndex * puzzle.utility.getTileSize()
      };
    };


    // Adjacent
    // =======================================
    var getIDByPosition = function(position) {
      for (var id in puzzle.grid) {
        if (utility.compareObjects(puzzle.grid[id].position, position)) {
          return parseInt(id);
        }
      }
    };

    var getIDByCoordinates = function(coordinates) {
      for (var id in puzzle.grid) {
        if (utility.compareObjects(puzzle.grid[id].coordinates, coordinates)) {
          return parseInt(id);
        }
      }
    };

    var isAdjacent = function(id) {
      var tilePosition = puzzle.utility.getTilePosition(id);
      var gridID = getIDByPosition(tilePosition);
      var adjacentIDs = getAdjacentIDs(gridID);
      var openID = getIDByPosition(puzzle.openPosition);

      return adjacentIDs.indexOf(openID) > -1;
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
      return x < (puzzle.config.gridSize - 1);
    };

    var canMoveUp = function(y) {
      return y > 0;
    };

    var canMoveDown = function(y) {
      return y < (puzzle.config.gridSize - 1);
    };


    // Public Methods
    // =======================================
    puzzle.isAdjacent = isAdjacent;
    puzzle.setGrid = setGrid;
    

    return puzzle;
  })(puzzle || {});

