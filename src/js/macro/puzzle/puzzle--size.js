
// ===========================================
// Puzzle - Options
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var changeGridSize = function(size) {
      if (size != puzzle.config.rowSize) {
        toggleRadio();
        puzzle.stop();
        puzzle.reset();

        setTimeout(function(){
          puzzle.config.rowSize = size;
          puzzle.setGrid();
          puzzle.buildPuzzle();
          puzzle.setCSS();
        }, 600);
      }
    };

    var toggleRadio = function() {
      $cache(".fa", $cache("#options")).toggleClass("fa-circle fa-circle-o");
    };

    puzzle.changeGridSize = changeGridSize;

    return puzzle;
  })(puzzle || {});

