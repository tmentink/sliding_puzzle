
// ===========================================
// Puzzle - Variables
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Variables
    // =======================================    
    puzzle.isReady = false;
    puzzle.isAnimating = false;

    puzzle.grid;
    puzzle.moves = 0;
    puzzle.gridSize = 3;
    puzzle.puzzleSize = 300;
    puzzle.imageID = 0;

    return puzzle;
  })(puzzle || {});

