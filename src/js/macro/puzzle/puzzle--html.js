
// ===========================================
// Puzzle - HTML
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var buildPuzzle = function() {
      var HTML = "";

      for (var id in puzzle.grid) {
        HTML += buildTile(id);
      }

      $cache("#tiles").html(HTML);
    };

    var buildTile = function(id) {
      return "<div data-id='" + id + "' class='puzzle__tile'></div>";
    };


    // Public Methods
    // =======================================
    puzzle.buildPuzzle = buildPuzzle;

    return puzzle;
  })(puzzle || {});

