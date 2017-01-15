
// ===========================================
// Puzzle - Grid
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // References
    // =======================================
    var getTileCount = puzzle.utility.getTileCount;
    var getTileSize = puzzle.utility.getTileSize;


    // Set Grid
    // =======================================
    var rowIndex;
    var colIndex;

    var setGrid = function() {
      puzzle.grid = {};
      rowIndex = -1;
      var tileCount = getTileCount();
      
      for (var i = 0, i_end = tileCount; i < i_end; i++) {
        setGridIndexes(i);

        puzzle.grid[i] = {
          coordinates: [rowIndex, colIndex],
          position: getGridPosition(i)
        };
      }
    };

    var setGridIndexes = function(i) {
      colIndex = i % puzzle.gridSize;

      if (i % puzzle.gridSize == 0) {
        rowIndex += 1;
      }
    };

    var getGridPosition = function(i) {
      return {
        top: rowIndex * getTileSize(),
        left: colIndex * getTileSize()
      };
    };

    
    // Public Methods
    // =======================================
    puzzle.setGrid = setGrid;
    

    return puzzle;
  })(puzzle || {});

