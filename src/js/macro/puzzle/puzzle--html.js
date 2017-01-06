
// ===========================================
// Puzzle - HTML
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var buildPuzzle = function() {
      var HTML = "";

      var pieceCount = puzzle.config.rowSize * puzzle.config.rowSize;

      for (var i = 1, i_end = pieceCount + 1; i < i_end; i++) {
        HTML += buildPiece(i);
      }

      return HTML;
    };



    var buildPiece = function(i) {
      return "<div data-id='" + i + "' class='puzzle__piece'></div>";
    };


    puzzle.buildPuzzle = buildPuzzle;


    return puzzle;

  })(puzzle || {});

