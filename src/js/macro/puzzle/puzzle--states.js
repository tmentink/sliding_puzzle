
// ===========================================
// Puzzle - States
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    // Start
    // =======================================
    var start = function() {
      puzzle.isReady = true;
      $cache(".puzzle")
        .addClass("puzzle--tiled")
        .removeClass("puzzle--change");

      puzzle.utility.getLastTile()
        .addClass("puzzle__tile--hidden");
    };


    // Stop
    // =======================================
    var stop = function() {
      puzzle.isReady = false;
      $cache(".puzzle")
        .removeClass("puzzle--tiled puzzle--change");

      puzzle.utility.getLastTile()
        .removeClass("puzzle__tile--hidden");
    };


    // Change
    // =======================================
    var change = function() {
      puzzle.stop();
      puzzle.reset();
      $cache(".puzzle").addClass("puzzle--change");
    };


    // Public Methods
    // =======================================
    puzzle.start = start;
    puzzle.stop = stop;
    puzzle.change = change;


    return puzzle;
  })(puzzle || {});

