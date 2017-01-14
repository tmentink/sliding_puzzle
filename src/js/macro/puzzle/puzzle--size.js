
// ===========================================
// Puzzle - Size
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var setGridSize = function(size) {
      if (puzzle.isAnimating ||
          puzzle.config.gridSize == size) {
        return false;
      }

      puzzle.config.gridSize = size;
      toggleRadio();
      puzzle.stop();
      puzzle.reset();

      setTimeout(function(){       
        puzzle.setGrid();
        puzzle.buildPuzzle();
        puzzle.setCSS();
      }, 500);
    };

    var toggleRadio = function() {
      $cache(".fa", $cache("#options")).toggleClass("fa-circle fa-circle-o");
    };

    var setPuzzleSize = function() {
      if (page.breakpoints.mobile.matches) {
        puzzle.config.puzzleSize = puzzle.config.mobileSize;
      }
      else if (page.breakpoints.tablet.matches) {
        puzzle.config.puzzleSize = puzzle.config.tabletSize;
      }
      else if (page.breakpoints.desktop.matches) {
        puzzle.config.puzzleSize = puzzle.config.desktopSize;
      }
    };


    // Public Methods
    // =======================================
    puzzle.setGridSize = setGridSize;
    puzzle.setPuzzleSize = setPuzzleSize;


    return puzzle;
  })(puzzle || {});

