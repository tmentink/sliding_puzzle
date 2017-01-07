
// ===========================================
// Puzzle - Core
// ===========================================

  var puzzle = (function(puzzle) {
    "use strict";

    var newGame = function() {
      if (puzzle.isAnimating) {
        return false;
      }

      puzzle.isAnimating = true;
      puzzle.moves = 0;
      puzzle.setScore();

      var delay = 250;
      if (!puzzle.isReady) {
        start();
        delay = 1000;
      }

      setTimeout(function(){
        puzzle.shuffle();
      }, delay);
    };

    var start = function() {
      puzzle.isReady = true;
      $cache(".puzzle").addClass("puzzle--tiled");
      $cache("[data-id='8']").addClass("puzzle__tile--hidden");
    };

    var done = function() {
      puzzle.isReady = false;
      $cache(".puzzle").removeClass("puzzle--tiled");
      $cache("[data-id='8']").removeClass("puzzle__tile--hidden");
    };

    var setScore = function() {
      $cache(".moves").html(puzzle.moves);
    };

    var isCorrect = function() {
      return utility.compareObjects(puzzle.getAllPositions(), puzzle.grid);
    }

    var check = function() {
      if (isCorrect()) {
        done();
      }
    };


    // Public Methods
    // =======================================
    puzzle.newGame = newGame;
    puzzle.setScore = setScore;
    puzzle.check = check;


    return puzzle;
  })(puzzle || {});

